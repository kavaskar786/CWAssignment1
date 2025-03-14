import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useMemo, useState } from "react";
import { ColDef, ColGroupDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Cell from "../components/Cell";

export interface Value {
  value: number;
}

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const AGgrid = () => {
  const [rowData] = useState([
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      field: "make",
      cellRenderer: Cell,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: { values: ["Tesla", "Ford", "Toyota"] },
      checkboxSelection: true,
    },
    { field: "model" },
    {
      headerName: "Energy type",
      children: [{ field: "electric" }, { field: "fuel" }],
    },
    {
      field: "price",
      valueFormatter: ({ value }: Value) => "₹" + value,
      cellClassRules: { "bg-green-800": ({ value }: Value) => value >= 60000 },
    },
  ]);

  const defColDef = useMemo(() => {
    return {
      //   flex: 1,
      filter: true,
      //   floatingFilter: true,
      editable: true,
    };
  }, []);
  return (
    <div className="flex items-center justify-center flex-col w-full h-[92vh]">
      <h1 className="font-title text-white text-4xl mb-10">AGgrid Practice</h1>
      <div
        // define a height because the Data Grid will fill the size of the parent container
        className="ag-theme-quartz-dark w-[90%] h-[70%]  md:w-[129.3vh] md:h-[72.3vh] mx-auto shadow-2xl rounded-xl shadow-[#46586e]"
        // style={{ height: 200, width: 800 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defColDef}
          rowSelection={"multiple"}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20]}
        />
      </div>
    </div>
  );
};
export default AGgrid;
