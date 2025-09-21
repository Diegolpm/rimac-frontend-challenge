import ForSomeoneIcon from "../../assets/icons/IcAddUserLight.svg";
import ForYouIcon from "../../assets/icons/IcProtectionLight.svg";

export type CardInformation = {
  title: string;
  description: string;
  src: string;
};

export const cardInformation: CardInformation[] = [
  {
    title: "Para mi",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    src: ForYouIcon,
  },
  {
    title: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    src: ForSomeoneIcon,
  },
];
