declare module "*.svg" {
    import * as React from "react";
  
    const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
  
    export const ReactComponent;
  }
declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

// declare module "*.svg" {
//     const path: string;
//     export default path;
// }


  