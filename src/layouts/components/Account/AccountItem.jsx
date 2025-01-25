import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function AccountItem() {
    return (
        <>
            <div className="flex justify-center py-2 px-4 items-center">
                <img
                    className="w-9 h-9 rounded-full"
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c0a37b06366155df0e944c6828998563.jpeg?lk3s=a5d48078&nonce=2465&refresh_token=16ec2831fa69aa7dc9628120b0309328&x-expires=1737792000&x-signature=5SRG1W74e7BvMDmrQUoo%2FwTMpGQ%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                <div className="flex-1 ml-3">
                    <h4 className="   font-semibold">Nguyen Anh Duy
                        <FontAwesomeIcon icon={faCheckCircle}
                            className="  w-4 h-4  text-[#20d5ec] ml-1   rounded-full" />
                    </h4>
                    <p className="text-sm text-gray-400">duydangngu</p>
                </div>

            </div>
        </>
    );
}

export default AccountItem;