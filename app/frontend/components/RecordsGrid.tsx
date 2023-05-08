import { ReactNode, CSSProperties, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { IoAddCircle } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Heading, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import './styles/RecordsGridStyle.css';

interface RecordsGridProps {
  title?: string;
  titleIcon?: IconType;
  children?: ReactNode;
  items: object[];
  selectedRecords?: object[];
  dataKey: string;
  sortMode?: 'multiple' | 'single';
  sortOrder?: null | 0 | 1 | -1;
  sortField?: string;
  globalFilterFields?: string[];
  tableStyle?: CSSProperties;
  scrollHeight?: string;
  onSelectionChange?: () => void;
  onNewClick?: () => void;
}

const RecordsGrid = ({
  children,
  title,
  titleIcon,
  items,
  selectedRecords,
  dataKey,
  sortMode,
  sortOrder,
  sortField,
  globalFilterFields,
  tableStyle,
  scrollHeight,
  onSelectionChange,
  onNewClick,
}: RecordsGridProps) => {
  const MIN_ROWS = 10;
  const showPaginator = items?.length > MIN_ROWS;
  const [globalFilter, setGlobalFilter] = useState('');

  const tableHeader = (
    <Flex padding={2} justify="space-between" wrap="nowrap" className="bg-transparent">
      <HStack w="100%" margin="auto" marginLeft="0">
        {titleIcon && <Icon as={titleIcon} boxSize={6} />}
        <Heading size="md">{title}</Heading>
      </HStack>
      <Box w="100%" textAlign="right" paddingEnd={2}>
        <Button variant="ghost" size="md" onClick={onNewClick} borderRadius="20px" colorScheme="green">
          <IoAddCircle />
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
            onInput={(ev: React.ChangeEvent<HTMLInputElement>): void => setGlobalFilter(ev.target.value)}
          />
        </InputGroup>
      </Box>
    </Flex>
  );

  return (
    <DataTable
      sortField={sortField}
      sortOrder={sortOrder}
      metaKeySelection={false}
      selection={selectedRecords}
      onSelectionChange={onSelectionChange}
      paginator={showPaginator}
      rows={MIN_ROWS}
      rowsPerPageOptions={[10, 20, 50]}
      value={items}
      dataKey={dataKey}
      sortMode={sortMode}
      emptyMessage="No records found"
      tableStyle={tableStyle}
      columnResizeMode="expand"
      resizableColumns
      showGridlines
      globalFilter={globalFilter}
      globalFilterFields={globalFilterFields}
      header={tableHeader}
      className="records-grid"
      scrollable
      scrollHeight={scrollHeight}
    >
      {children}
    </DataTable>
  );
};

RecordsGrid.defaultProps = {
  children: null,
  title: '',
  titleIcon: null,
  sortMode: 'single',
  sortOrder: null,
  selectedRecords: null,
  sortField: null,
  globalFilterFields: null,
  tableStyle: null,
  scrollHeight: null,
  onSelectionChange: () => {},
  onNewClick: () => {},
};

export default RecordsGrid;
