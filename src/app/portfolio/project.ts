 export class Project {
  id: number;
  title: string;
   backgroundUrl: string;
   description: string;
   button1Title: string;
   button1Url: string;
   button1Display: string;

   button2Title?: string;
   button2Url: string;
   button2Display: string;

   modalButtonDisplay: string;
   type: Array<string>;
   modalButtonTitle?: string;
   modalType?: string;
   modalData?: Array<String>;
}
