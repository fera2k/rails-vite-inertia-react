import { ReactNode, CSSProperties } from 'react';
import { DataTable } from 'primereact/datatable';
// import { Button } from 'primereact/button';

interface RecordsGridProps {
  children?: ReactNode;
  items: object[];
  selectedRecords?: object[];
  dataKey: string;
  onSelectionChange?: () => void;
  sortMode?: 'multiple' | 'single';
  sortOrder?: null | 0 | 1 | -1;
  sortField?: string;
  tableStyle?: CSSProperties;
}

const RecordsGrid = ({
  children,
  items,
  selectedRecords,
  dataKey,
  onSelectionChange,
  sortMode,
  sortOrder,
  sortField,
  tableStyle,
}: RecordsGridProps) => {
  const MIN_ROWS = 10;
  const showPaginator = items?.length > MIN_ROWS;

  // const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
  // const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

  return (
    <DataTable
      sortField={sortField}
      sortOrder={sortOrder}
      // className="p-datatable-striped"
      metaKeySelection={false}
      selection={selectedRecords}
      onSelectionChange={onSelectionChange}
      paginator={showPaginator}
      // paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReports"
      // paginatorLeft={paginatorLeft}
      // paginatorRight={paginatorRight}
      rows={MIN_ROWS}
      rowsPerPageOptions={[10, 20, 50]}
      value={items}
      dataKey={dataKey}
      sortMode={sortMode}
      emptyMessage="No records found"
      tableStyle={tableStyle}
    >
      {children}
    </DataTable>
  );
};

RecordsGrid.defaultProps = {
  children: null,
  sortMode: 'single',
  onSelectionChange: () => {},
  sortOrder: null,
  selectedRecords: null,
  sortField: null,
  tableStyle: null,
};

export default RecordsGrid;
