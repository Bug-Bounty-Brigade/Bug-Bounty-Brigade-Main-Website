import tempPhoto from "../app/assets/teamphoto.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";

interface PhotoCard {
  name: string;
  companyname: string;
  linkedinurl: string;
  twitterurl: string;
  imageurl: string;
}
const PhotoCard = ({
  name,
  companyname,
  linkedinurl,
  twitterurl,
  imageurl,
}: PhotoCard) => {
  return (
    <div className="bg-[#40392F] p-2 rounded-3xl">
      <div className="w-full mx-auto my-2">
        <Image
          src={tempPhoto}
          alt={name + "photo"}
          className="w-full object-cover lg:w-[268px] h-[263px] rounded-md"
        />
        <h4 className="text-2xl text-[#E8EABB] my-2">{name}</h4>
        <p className="my-2 ">{companyname}</p>
        <div className="flex mt-2 space-x-2">
          <a href={linkedinurl} className="bg-[#6C5B3F] p-1 rounded-full">
            <AiFillLinkedin className="text-lg text-[#EEB33B] h-8 w-8 text-center rounded-full" />
          </a>
          <a href={twitterurl} className="p-1 bg-[#6C5B3F] rounded-full ">
            <AiFillTwitterCircle className="text-lg text-[#EEB33B] h-8 w-8 text-center" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
