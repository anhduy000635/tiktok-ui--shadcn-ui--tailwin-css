import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Menu() {
    return (
        <DropdownMenu>
            {/* Nút Trigger */}
            <DropdownMenuTrigger className="outline-none">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c0a37b06366155df0e944c6828998563.jpeg?lk3s=a5d48078&nonce=2465&refresh_token=16ec2831fa69aa7dc9628120b0309328&x-expires=1737792000&x-signature=5SRG1W74e7BvMDmrQUoo%2FwTMpGQ%3D&shp=a5d48078&shcp=81f88b70" />
                    <AvatarFallback>Duy Dang Ngu</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            {/* Nội dung Dropdown */}
            <DropdownMenuContent
                side="bottom"
                align="end"
                className="w-56 max-w-56 max-h-60 scrollbar-thin overflow-y-auto bg-white shadow-lg rounded-xl p-2 border border-gray-200"
            >
                {/* Tiêu đề */}
                <DropdownMenuLabel className="text-gray-700 font-semibold">
                </DropdownMenuLabel>

                {/* Các mục */}
                {Array.from({ length: 15 }).map((_, index) => (
                    <DropdownMenuItem
                        key={index}
                        className="py-2 px-4 text-gray-900 font-medium hover:bg-gray-100 rounded-md cursor-pointer"
                    >
                        Item {index + 1}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Menu;
