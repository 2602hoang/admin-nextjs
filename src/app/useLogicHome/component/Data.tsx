import { useState } from "react";
interface Statistic {
  key: number;
  icon: React.ReactNode;
  number: React.ReactNode;
  title: React.ReactNode;
  discription: React.ReactNode;
}

interface Testimonial {
  key: number;
  name: string;
  number: number;
  img: string;
}
export const useDataContent = () => {
  const [data] = useState<Statistic[]>([
    {
      key: 1,
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABHNCSVQICAgIfAhkiAAAATNJREFUSIm1lU2SgyAQhV/j3CtkNZUjaHGX6F1ScwVKN+rB6J7FDCk0IKjJ28nP1w3Yr4FC8VCPrm/a0vWUW+D6piXgHo4J0FXfP5tBkmCxRkvl7hDSfytlEqE5DLIV4AUcA5KrOro9pucJSC5+PgVfgNfH3soot5ZiWZbcYS4ALSZWxy6VWKNZsfYcATrivhEAIFbXvcCt7JUfPAJ1fdOKNdp/h9enYhtKJNZoAu6sWMfmD4O9iORyCsxDPfr3KFF5xr5gzoDFGs1DPe4BlYH/iyV88beA36F4xkLzWfBXNBqriRVDBUVDrK7hP0u3xyTWJKv1WdJ7jCclsUaL4hEAFiYkQKdYTUdMaO2OBOzz4bVS7vhZo89lIUKz35RrXZvgVEZhr8s1hY+1/2K5vmn3+McvKxnxJQi7zY4AAAAASUVORK5CYII=",
      number: <span>$5k</span>,
      title: <span>Total Sales</span>,
      discription: <span className="text-totalsale">+10% from yesterday</span>,
    },
    {
      key: 2,
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAABHNCSVQICAgIfAhkiAAAAUdJREFUOI3llLFxg0AQRd8iFSB3YCJLmTsQKsGJNC7DFSAqcBkanLgEnzpQBtm1QAOwDgCDmAMOZx7/6Lhj3/y9213BodRmZ5DYddZJk1O4Ow93pV1cbBa16xXBu6LPAsaJgkiQW0n11u69hjsDIGNuBCmO4dODO4PcAo8u15LaXAVMiSY9h5+KbkCvLiDIXpCipHrpYiRWiNZ1CnptLTcOCmADsncDQdHiPiaLQGrgUKdwG46B5hT8NvAfAFObnVOba11m43I+igsGEguYo6M7FjmsO6iFbQ9z/08CLzaLAuTLFwYTKbcwqAu/f3cVmH5RewEDiLqvYa+rEzYJbEbTj6tuiGgy5q4xMq8+zDUDvRwOYT4lM+twacnMAmtp4guDmZSbyze+MPgL02YtYBSJP2w+Ou59pcC6RJMVgt51xnIJmAo9fAOqTIvxPPU0nAAAAABJRU5ErkJggg==",
      number: <span>500</span>,
      title: <span>Total Order</span>,
      discription: <span className="text-logo">+8% from yesterday</span>,
    },
    {
      key: 3,
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAABHNCSVQICAgIfAhkiAAAAYRJREFUSImtVUuygjAQ7I5un1ZpeRddCScDTwau4C5WrALXL/0WMYoUAfHZq3xmOpPJ9IR4A7fqkjiYJMzXh20+5cMpg7a+FoCS/rqE09gBZoy0qWzuSVlSLl3tt5RwAgASmd+fiaayeVtbxZzb+lq0tdWtuiSzIwbi+aR+T2N+UWKSx6lDAUBcZIP+YdB/eRIZwFLSOX74sM36sM0J+Hx6o++AcumyuyDhZOBKABBN4ashnsu+jU+LL80XYgNX/hx2JQC0tQUAhPkQ+ja36gLRJJ4Lz4caI5kDB5MsY5teCBoliNmQPBIA2toKYLnab9J/Bou2vhaSztGIP0UI7iGQsXqdwpCsTUzrc0hFU/R5JnvFu+iqFgBMf+FbMM+BV9y38FFVhIY11FLD3tKrTrNUJy4yQklTWaBz06ayuYiMn0a82m/Str4WpDJhcQSEbnekXMqgunfquNukgOGPlnLpz2FX3iNWQuLFYAhOBgAexCHyQB5IgfsPMkckQ2/RVDbv3+YP/1zf1/752ocAAAAASUVORK5CYII=",
      number: <span>9</span>,
      title: <span>Product Sold</span>,
      discription: <span className="text-productsold">+2% from yesterday</span>,
    },
    {
      key: 4,
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAABHNCSVQICAgIfAhkiAAAAW9JREFUSImVlcuVwyAMRS85s3UP7iSkhCQFERcUpwSTTtwD+2EWfAaDwVgbH4P0JD19EDRk/BiJRflf6b8ay3d9Dq+WLcClCvw2LyxLBjoBIFDj2xyCV4HH2dhxNsv4MbJ1fx7cGdqmzsfIcTa2lUFBS1QOFFRkvQ8a0Aiu3eDRuKNgWL6A3KNuH9xFog+BO6QE99GcAfEUdYBfXNRdrSZQNLIswJNCqRqXG+cu0z5wH9HkDZc8A9+CCwKFZWoVXtQuYnQijr8mrcUB8CF4dOA0r/47QVnEQGF6LgqFXxddV5+ntrOxeTY/EdSisMjgbnyb0w5yEd6r236C23ofdMK1Xh/DrRpt2k1ug+qUNhGBspQ2xdwpns+2uRUj+PoYiuJuAGoO0sgtUxhCAiWH6zXs78bU7t2HIdKFdiLrc3hhmRCoMw/EBZCtES4cwP4jkVMC8dXpjiaM/xFNkBT06OUpLeud9K9CsUPOi5+P/PgPRYzwrHyI030AAAAASUVORK5CYII=",
      number: <span>12</span>,
      title: <span>New Customer</span>,
      discription: <span className="text-newcustomer">+3% from yesterday</span>,
    },
  ]);

  const testimonials: Testimonial[] = [
    {
      key: 1,
      name: "Home Decor Range",
      number: 78,
      img: "https://themewagon.github.io/nickelfox/assets/home-decor-range-CcM1ybHr.jpg",
    },
    {
      key: 2,
      name: "Disney Princess Dress",
      number: 62,
      img: "https://themewagon.github.io/nickelfox/assets/disney-princess-dresses-Cjj8uIOi.jpg",
    },
    {
      key: 3,
      name: "Bathroom Essentials",
      number: 51,
      img: "https://themewagon.github.io/nickelfox/assets/bathroom-essentials-cvlkOIR7.jpg",
    },
    {
      key: 4,
      name: "Apple Smartwatch",
      number: 29,
      img: "https://themewagon.github.io/nickelfox/assets/apple-smartwatch-BudkkcRE.jpg",
    },
  ];
  return { data, testimonials };
};
