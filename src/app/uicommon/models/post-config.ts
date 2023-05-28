
export interface PostConfig {
    sImg: string;
    STitle: string;
    sDesc: string;
    sCat: string;
    oDate: Date;

    nImgSize: number; //0: xs, 1: sm, 2: md, 3: lg

    arrBullets?: string[];

    bShowToSide?: boolean;
  
    bIsFirstItemInMRCList?: boolean;
    bShowDesc?: boolean;
    bShowBullets?: boolean;
  }