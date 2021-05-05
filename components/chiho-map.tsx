import { areaFillColor, MapProps, useAreaClick } from "../logic/logic"

export const ChihoMap = ({ onClick }: MapProps) => {
  const click = useAreaClick(onClick)
  return (
    <svg viewBox="0 0 492 394">
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="hokkaido"
        d="M 405.00,5.00
           C 405.00,5.00 413.00,5.00 413.00,5.00
             415.00,14.00 420.97,19.45 420.00,29.00
             424.38,31.82 425.61,37.59 428.22,41.91
             432.09,48.30 435.43,50.16 439.29,55.17
             444.12,61.43 441.08,64.57 451.00,64.00
             451.00,64.00 450.00,68.00 450.00,68.00
             454.56,69.52 455.03,69.52 457.00,74.00
             457.00,74.00 469.00,74.89 469.00,74.89
             469.00,74.89 482.00,69.00 482.00,69.00
             478.49,75.41 470.01,81.82 476.00,89.00
             474.96,92.87 474.89,93.67 471.00,95.00
             471.00,95.00 475.00,102.00 475.00,102.00
             475.00,102.00 462.72,103.20 462.72,103.20
             460.49,103.64 458.53,105.33 456.05,105.36
             452.04,105.41 452.36,102.09 447.81,101.92
             440.02,101.63 426.08,109.61 420.08,114.52
             412.04,121.10 417.45,121.71 412.00,127.00
             404.11,119.13 403.34,121.60 398.46,116.68
             393.06,111.24 385.96,98.98 378.00,97.50
             370.02,96.01 364.75,103.24 360.00,102.00
             360.00,102.00 359.00,94.00 359.00,94.00
             356.23,93.09 350.85,90.69 348.12,91.73
             335.98,96.37 339.42,108.65 351.00,110.00
             351.00,110.00 357.00,123.00 357.00,123.00
             352.18,122.99 350.31,121.65 349.00,117.00
             343.98,118.30 339.66,119.78 338.00,125.00
             338.00,125.00 329.00,129.00 329.00,129.00
             329.00,129.00 330.31,120.21 330.31,120.21
             330.31,120.21 335.79,111.16 335.79,111.16
             335.79,111.16 331.39,99.00 331.39,99.00
             331.39,99.00 334.00,88.00 334.00,88.00
             334.00,88.00 347.00,87.00 347.00,87.00
             349.82,81.12 353.62,81.19 354.81,78.59
             356.06,75.85 353.25,71.44 352.00,69.00
             352.00,69.00 354.00,68.00 354.00,68.00
             357.62,70.15 360.14,72.16 362.00,75.77
             369.04,76.28 371.45,82.55 378.50,75.77
             384.36,69.70 377.54,56.64 389.00,59.00
             389.00,59.00 392.53,50.87 392.53,50.87
             392.53,50.87 394.99,42.00 394.99,42.00
             394.99,42.00 400.59,32.97 400.59,32.97
             400.59,32.97 401.70,19.00 401.70,19.00
             401.70,19.00 401.70,10.17 401.70,10.17
             401.70,10.17 405.00,5.00 405.00,5.00 Z
           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="tohoku"
        d="
           M 334.00,139.00
           C 334.00,139.00 339.00,142.00 339.00,142.00
             337.20,149.16 337.43,157.24 347.00,151.00
             347.00,151.00 350.00,156.00 350.00,156.00
             350.00,156.00 356.00,151.00 356.00,151.00
             355.65,155.15 354.16,161.00 355.15,164.96
             356.42,170.09 360.63,170.10 360.08,177.83
             359.37,187.84 361.89,189.49 361.30,193.91
             360.73,198.10 359.55,195.96 360.00,203.00
             355.44,204.23 356.98,208.20 354.18,211.82
             352.11,214.52 348.18,215.32 345.00,216.00
             344.51,222.25 339.98,224.27 336.00,229.00
             336.00,229.00 338.00,232.95 338.00,232.95
             335.48,232.87 328.32,231.93 326.46,232.95
             324.89,233.70 322.84,238.32 322.00,240.00
             317.53,248.96 320.52,248.83 319.82,256.00
             319.51,259.20 317.99,263.81 316.99,266.96
             315.13,272.77 310.60,281.22 305.00,273.00
             305.00,273.00 303.00,273.00 303.00,273.00
             303.00,273.00 300.00,277.00 300.00,277.00
             298.46,272.85 293.27,263.87 288.44,263.34
             286.34,263.12 284.77,265.11 282.71,266.00
             279.72,267.30 279.98,265.96 274.00,269.00
             272.16,264.64 270.07,269.59 270.00,261.00
             270.00,261.00 265.00,261.00 265.00,261.00
             265.00,261.00 264.00,266.00 264.00,266.00
             264.00,266.00 258.00,268.00 258.00,268.00
             258.00,268.00 257.00,259.00 257.00,259.00
             248.62,258.49 249.42,261.32 245.17,261.24
             240.66,261.67 243.63,258.81 234.00,261.24
             234.00,261.24 235.00,257.00 235.00,257.00
             248.18,253.94 249.51,255.77 261.70,246.56
             266.82,242.69 266.71,239.32 270.21,237.16
             270.21,237.16 283.79,232.99 283.79,232.99
             287.20,230.90 291.59,221.84 293.00,218.00
             293.00,218.00 295.00,219.00 295.00,219.00
             295.00,219.00 306.00,203.00 306.00,203.00
             306.00,203.00 308.00,204.00 308.00,204.00
             308.00,204.00 313.47,191.00 313.47,191.00
             313.47,191.00 316.00,177.00 316.00,177.00
             316.00,177.00 312.00,176.00 312.00,176.00
             312.00,176.00 319.58,164.58 319.58,164.58
             319.58,164.58 318.88,158.09 318.88,158.09
             318.88,158.09 318.88,153.00 318.88,153.00
             318.88,153.00 324.00,155.00 324.00,155.00
             324.00,155.00 329.78,149.72 329.78,149.72
             329.78,149.72 334.00,139.00 334.00,139.00 Z
           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="chubu"
        d="
           M 211.00,239.00
           C 211.00,239.00 227.00,236.00 227.00,236.00
             224.81,242.21 222.02,242.18 216.00,243.00
             216.10,246.33 216.69,257.55 220.19,258.86
             222.98,259.55 232.30,249.89 233.93,258.86
             233.93,258.86 233.93,263.00 233.93,263.00
             241.64,258.85 239.83,261.71 244.17,262.08
             246.58,262.29 248.80,260.84 250.90,260.96
             255.62,261.22 256.74,267.31 257.00,271.00
             254.34,271.01 247.45,270.43 248.43,274.97
             248.90,277.13 251.17,278.15 251.18,281.09
             251.19,283.06 249.67,284.61 250.02,290.00
             250.49,297.27 254.06,297.56 256.01,300.59
             257.29,302.57 257.80,308.53 258.00,311.00
             258.00,311.00 252.00,311.00 252.00,311.00
             251.78,312.71 251.29,315.37 251.46,317.00
             251.73,319.41 257.51,329.44 247.00,334.69
             245.29,335.54 243.82,335.70 242.00,336.00
             242.00,336.00 244.00,323.00 244.00,323.00
             244.00,323.00 248.00,323.00 248.00,323.00
             247.12,321.63 246.56,320.22 244.78,319.74
             242.36,319.09 234.03,323.67 232.04,325.30
             230.04,326.94 228.55,328.96 227.00,331.00
             227.00,331.00 209.00,325.44 209.00,325.44
             209.00,325.44 198.00,324.00 198.00,324.00
             198.00,324.00 207.00,322.00 207.00,322.00
             203.34,317.97 201.29,317.71 196.00,318.00
             196.00,318.00 193.00,302.00 193.00,302.00
             193.00,302.00 187.00,301.00 187.00,301.00
             189.82,294.43 189.26,294.83 187.00,288.00
             180.62,292.65 173.63,293.85 166.00,292.00
             166.00,292.00 167.00,287.00 167.00,287.00
             173.96,288.65 178.62,288.54 182.07,281.00
             183.44,278.01 182.68,276.27 185.31,273.52
             188.40,270.28 205.78,260.59 208.98,254.83
             210.28,252.49 210.97,242.07 211.00,239.00 Z           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="kanto"
        d="
           M 266.00,265.00
           C 266.00,265.00 268.00,269.00 268.00,269.00
             268.00,269.00 275.00,272.00 275.00,272.00
             275.00,272.00 287.00,265.00 287.00,265.00
             292.22,266.94 295.76,270.19 294.00,276.00
             294.00,276.00 304.00,280.00 304.00,280.00
             304.00,280.00 304.00,277.00 304.00,277.00
             304.00,277.00 305.34,281.17 305.34,281.17
             305.34,281.17 298.18,296.00 298.18,296.00
             298.18,296.00 297.61,306.83 297.61,306.83
             297.61,306.83 297.00,313.00 297.00,313.00
             287.69,315.75 286.81,319.73 284.00,328.00
             278.88,327.36 277.67,327.97 273.00,330.00
             273.00,330.00 276.00,325.00 276.00,325.00
             276.37,317.33 282.30,318.37 282.61,313.89
             282.84,310.72 278.99,307.35 275.89,308.55
             273.28,309.55 272.72,311.63 272.00,314.00
             272.00,314.00 267.00,318.00 267.00,318.00
             258.83,316.24 260.59,316.17 253.00,319.00
             253.63,313.65 254.39,312.07 260.00,313.00
             260.17,305.46 258.71,300.06 251.82,296.00
             251.82,296.00 251.82,288.00 251.82,288.00
             251.82,288.00 254.00,278.00 254.00,278.00
             250.61,277.43 246.32,275.10 251.16,272.18
             255.24,269.74 261.46,272.80 266.00,265.00 Z
           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="chugoku"
        d="
           M 61.00,293.00
           C 71.58,290.65 76.00,286.95 85.00,282.08
             85.00,282.08 93.99,278.06 93.99,278.06
             101.23,274.72 97.48,272.56 107.00,273.00
             110.51,278.87 113.60,276.48 119.00,277.37
             123.70,278.14 125.62,281.95 141.00,281.00
             139.69,292.26 131.39,289.73 131.00,301.00
             131.00,301.00 126.00,304.00 126.00,304.00
             126.00,304.00 120.00,302.00 120.00,302.00
             120.00,302.00 120.00,306.00 120.00,306.00
             113.39,302.84 112.82,303.97 106.00,306.00
             106.00,306.00 105.00,304.00 105.00,304.00
             105.00,304.00 106.00,303.00 106.00,303.00
             106.00,303.00 103.00,305.00 103.00,305.00
             103.00,305.00 101.00,305.00 101.00,305.00
             101.00,305.00 101.00,303.00 101.00,303.00
             101.00,303.00 99.00,303.00 99.00,303.00
             96.67,305.88 89.39,305.69 86.00,305.00
             85.40,300.89 82.35,300.95 79.04,302.57
             73.70,305.20 75.72,308.15 70.00,312.00
             70.00,312.00 67.00,306.00 67.00,306.00
             63.26,306.31 62.41,305.69 59.00,305.43
             49.94,304.74 54.10,306.49 45.00,302.00
             45.97,297.51 46.02,296.52 50.00,294.00
             53.86,297.31 57.14,296.27 62.00,296.00
             62.00,296.00 61.00,293.00 61.00,293.00 Z
           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="kinki"
        d="
           M 143.00,278.00
           C 143.00,278.00 162.00,280.00 162.00,280.00
             162.00,280.00 159.00,284.00 159.00,284.00
             159.00,284.00 166.00,289.00 166.00,289.00
             166.00,289.00 165.00,292.00 165.00,292.00
             165.00,292.00 178.00,295.00 178.00,295.00
             178.00,295.00 175.00,307.00 175.00,307.00
             179.29,302.16 181.29,301.30 183.00,295.00
             183.00,295.00 178.00,293.00 178.00,293.00
             178.00,293.00 184.00,293.00 184.00,293.00
             184.00,293.00 188.00,289.00 188.00,289.00
             188.00,289.00 189.00,297.00 189.00,297.00
             185.33,300.55 184.78,303.60 191.00,303.00
             191.00,303.00 193.00,308.00 193.00,308.00
             193.00,308.00 184.00,316.00 184.00,316.00
             184.00,316.00 184.00,322.00 184.00,322.00
             188.58,324.27 190.22,325.05 192.00,330.03
             192.00,330.03 179.03,330.03 179.03,330.03
             179.03,330.03 172.00,334.00 172.00,334.00
             172.00,334.00 173.00,337.00 173.00,337.00
             166.95,340.59 163.80,346.78 159.00,347.10
             153.62,347.46 149.70,336.25 147.00,332.00
             147.00,332.00 153.00,327.00 153.00,327.00
             148.83,317.90 162.64,319.34 159.13,312.07
             157.04,307.75 152.51,309.75 150.10,309.06
             146.87,308.13 146.03,304.74 142.90,303.02
             140.34,301.62 137.40,302.36 135.59,301.01
             132.17,298.45 134.93,293.11 140.00,292.00
             142.25,284.03 142.99,289.40 143.00,278.00 Z
           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="kyusyu"
        d="
           M 23.00,313.00
           C 29.86,312.88 27.91,310.56 31.63,307.97
             33.44,306.72 37.76,306.30 40.00,306.00
             40.00,306.00 41.00,317.00 41.00,317.00
             49.61,319.10 47.72,322.45 56.93,319.00
             57.17,320.34 57.65,321.24 56.93,322.65
             55.72,324.71 52.99,324.40 51.62,325.75
             49.30,328.02 50.97,331.24 54.30,332.21
             54.30,332.21 58.00,333.00 58.00,333.00
             58.00,333.00 58.00,338.00 58.00,338.00
             58.00,338.00 57.00,341.00 57.00,341.00
             57.00,341.00 59.00,344.00 59.00,344.00
             50.87,346.29 50.38,354.77 44.00,357.00
             44.00,357.00 45.00,359.00 45.00,359.00
             45.00,359.00 43.00,359.00 43.00,359.00
             43.00,359.00 38.59,368.09 38.59,368.09
             38.59,368.09 32.00,382.00 32.00,382.00
             32.00,382.00 32.00,376.00 32.00,376.00
             29.68,376.80 26.35,377.48 24.77,379.43
             21.63,383.31 25.43,385.72 18.00,388.00
             20.11,382.04 21.18,382.25 19.00,376.00
             23.30,371.91 21.43,371.27 21.00,366.00
             18.01,367.99 15.04,369.44 14.00,373.00
             7.21,370.53 11.73,361.99 11.00,356.00
             11.00,356.00 24.00,349.00 24.00,349.00
             24.81,345.50 25.86,345.50 29.00,344.00
             29.00,344.00 23.45,326.14 23.45,326.14
             21.19,322.64 17.54,322.24 15.58,326.14
             15.58,326.14 14.00,331.00 14.00,331.00
             14.00,331.00 12.00,330.00 12.00,330.00
             11.70,322.39 9.13,322.58 6.00,317.00
             6.00,317.00 9.00,317.00 9.00,317.00
             10.06,319.49 11.50,318.98 14.00,319.00
             14.00,319.00 13.00,317.00 13.00,317.00
             13.00,317.00 14.00,316.00 14.00,316.00
             18.32,316.29 19.77,316.01 23.00,313.00 Z
           "
      />
      <path
        fill={areaFillColor}
        stroke="black"
        strokeWidth="1"
        onClick={click}
        className="map"
        id="shikoku"
        d="
           M 93.00,316.00
           C 94.00,317.59 94.67,319.01 96.33,320.10
             98.38,321.44 105.31,322.62 107.57,321.62
             111.37,319.95 113.37,315.10 119.00,314.55
             124.46,314.02 127.73,318.62 133.00,321.00
             133.00,321.00 131.86,330.90 131.86,330.90
             131.86,330.90 124.18,336.00 124.18,336.00
             124.18,336.00 117.00,343.00 117.00,343.00
             115.63,338.40 112.39,333.76 107.00,333.67
             105.27,333.64 102.83,334.68 101.09,335.16
             99.26,335.66 97.57,335.76 95.96,336.88
             91.42,340.04 93.05,343.58 86.00,343.00
             86.00,343.00 83.00,346.00 83.00,346.00
             83.00,346.00 84.00,349.00 84.00,349.00
             84.00,349.00 80.00,350.00 80.00,350.00
             80.00,350.00 75.00,340.00 75.00,340.00
             76.27,338.44 77.59,337.28 77.97,335.17
             78.27,333.16 76.43,330.84 77.97,328.71
             79.10,327.23 81.67,326.73 83.87,325.13
             87.00,322.86 88.96,319.64 90.00,316.00
             90.00,316.00 93.00,316.00 93.00,316.00 Z
      "
      />
    </svg>
  )
}