import Tableheader from './Tableheader';
import Tablebody from './Tabletbody';
function Table(){
    return(
        <div>
            <table border="2">
                <Tableheader/>
                <Tablebody/>
            </table>
        </div>
    )
}
export default Table;