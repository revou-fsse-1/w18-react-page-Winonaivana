export enum SelectedPage {
  Home = "home",
  Gallery = "gallery",
  ContactUs = "contactus",
}

export interface GalleryType {
  id: number;
  name: string;
  isSave: boolean;
  imgSrc: string;
}
