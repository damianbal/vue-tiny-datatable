
import DataTable from "./components/DataTable"
import TableRow from "./components/TableRow"
import TableHeading from "./components/TableHeading"

const VueTinyDataTable = {
    install(Vue, options) {
        Vue.component('data-table', DataTable)
        Vue.component('data-table-row', TableRow)
        Vue.component('data-table-heading', TableHeading)
    }
}

export default VueTinyDataTable