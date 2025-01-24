import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import PropTypes from 'prop-types'

function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col items-center ">
            <Header />
            <div className=" w-[1150px] flex max-w-full mt-16    px-[24px]  ">
                <Sidebar />
                <div className="flex-1"  >{children}
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout; 