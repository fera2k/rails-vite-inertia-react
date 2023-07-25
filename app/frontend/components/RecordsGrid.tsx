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
import sortBy from 'lodash.sortby';
import BaseTable, { AutoResizer, ColumnShape, SortOrder } from 'react-base-table';
import GridWrapper from '@/components/GridWrapper';
import 'react-base-table/styles.css';
import './styles/RecordsGridStyle.css';

interface RecordsGridProps {
  title?: string;
  titleIcon?: IconType;
  items: object[];
  columns: ColumnShape[];
  height?: string | number;
  onNewClick?: () => void;
}

interface ColumnOrdering {
  key: React.Key;
  order: SortOrder;
}
const RecordsGrid = ({ title, titleIcon, items, columns, height: wrapperHeight, onNewClick }: RecordsGridProps) => {
  const defaultSort: ColumnOrdering = { key: 'username', order: 'asc' };
  const [sortByColumn, setSortByColumn] = useState(defaultSort);
  const [sortedItems, setSortedItems] = useState(sortBy(items, ['username']));

  const { colorMode } = useColorMode();
  const baseTableClassName = colorMode === 'light' ? '' : 'basetable-darkmode';

  console.log(`basetable class: ${baseTableClassName}`);

  const onColumnSort = (column: { column: ColumnShape; key: React.Key; order: SortOrder }) => {
    setSortByColumn({ key: column.key, order: 'asc' });
    setSortedItems(sortBy(items, [column.key]));
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
            <Input
              type="search"
              placeholder="search..."
              variant="filled"
              onInput={
                (_ev: React.ChangeEvent<HTMLInputElement>): void =>
                  console.log('input search') /* setGlobalFilter(ev.target.value) */
              }
            />
          </InputGroup>
        </Box>
      </Flex>

      <GridWrapper height={wrapperHeight} id="grid-wrapper">
        <AutoResizer>
          {({ width, height }) => (
            <BaseTable
              width={width}
              height={height}
              data={sortedItems}
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
