import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import BaseTable, { AutoResizer, ColumnShape, SortOrder } from 'react-base-table';
import pick from 'lodash.pick';
import sortBy from 'lodash.sortby';
import GridWrapper from '@/components/GridWrapper';
import 'react-base-table/styles.css';
import './styles/RecordsGridStyle.css';

interface RecordsGridProps<T> {
  title?: string;
  titleIcon?: IconType;
  items: T[];
  columns: ColumnShape[];
  defaultSortByColumn: string;
  filterableColumns?: string[];
  height?: string | number;
  onNewClick?: () => void;
}

interface ColumnOrdering {
  key: React.Key;
  order: SortOrder;
}
const RecordsGrid = <T,>({
  title,
  titleIcon,
  items,
  columns,
  defaultSortByColumn,
  filterableColumns,
  height: wrapperHeight,
  onNewClick,
}: RecordsGridProps<T>) => {
  const defaultColumnOrdering: ColumnOrdering = { key: defaultSortByColumn, order: 'asc' };
  const [sortByColumn, setSortByColumn] = useState(defaultColumnOrdering);
  const [sortedItems, setSortedItems] = useState(sortBy(items, [defaultSortByColumn]));
  const [filteredItems, setFilteredItems] = useState(items);

  const { colorMode } = useColorMode();
  const baseTableClassName = colorMode === 'light' ? '' : 'basetable-darkmode';

  const onColumnSort = (column: { column: ColumnShape; key: React.Key; order: SortOrder }) => {
    setSortByColumn({ key: column.key, order: 'asc' });
    setSortedItems(sortBy(filteredItems, [column.key as string]));
  };

  const onSearchFieldChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    const term = ev.target.value.toLowerCase();
    const filtered: T[] = items.filter((item) => {
      const values: string[] = Object.values(
        filterableColumns && filterableColumns.length ? pick(item, filterableColumns) : item,
      );
      return values.some((value) => value.toLowerCase().includes(term));
    });

    setFilteredItems(filtered);
    setSortedItems(sortBy(filtered, [sortByColumn.key as string]));
  };

  return (
    <>
      <Flex justify="space-between">
        <HStack w="100%" paddingLeft={4}>
          {titleIcon && <Icon as={titleIcon} boxSize={5} />}
          <Heading size="md">{title}</Heading>
        </HStack>
        <Box w="100%" textAlign="right" paddingTop={1} paddingEnd={2}>
          <Button variant="outline" size="sm" onClick={onNewClick} borderRadius="20px" colorScheme="teal">
            <Icon as={IoAddCircle} boxSize={5} />
            &nbsp;New
          </Button>
        </Box>
        <Box w="100%" margin="auto" marginRight="0">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="search" placeholder="filter..." variant="filled" onChange={onSearchFieldChange} />
          </InputGroup>
        </Box>
      </Flex>

      <GridWrapper height={wrapperHeight} id="grid-wrapper">
        <AutoResizer>
          {({ width, height }) => (
            <BaseTable
              width={width}
              height={height}
              data={sortedItems as T[]}
              columns={columns}
              onColumnSort={onColumnSort}
              sortBy={sortByColumn}
              className={baseTableClassName}
            />
          )}
        </AutoResizer>
      </GridWrapper>
    </>
  );
};

RecordsGrid.defaultProps = {
  title: '',
  titleIcon: null,
  height: 'calc(100vh - 250px)',
  onNewClick: () => {},
};

export default RecordsGrid;
