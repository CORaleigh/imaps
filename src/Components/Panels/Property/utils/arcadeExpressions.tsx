import ExpressionInfo from "@arcgis/core/popup/ExpressionInfo";
export const arcadeExpressionInfos = [
  {
    name: "mailing-address",
    title: "mailing-address",
    expression: `When(
            IsEmpty($feature.ADDR3),$feature.ADDR1 + 
            TextFormatting.NewLine + 
            $feature.ADDR2,$feature.ADDR1 + 
            TextFormatting.NewLine + 
            $feature.ADDR2 + 
            TextFormatting.NewLine + 
            $feature.ADDR3)`,
  },
  {
    name: "site-address",
    title: "site-address",
    expression: `When(
            $feature.STMISC == '1/2', 
            replace($feature.SITE_ADDRESS, ' ', ' 1/2 ', false), 
            $feature.SITE_ADDRESS
        )`,
  },
  {
    name: "property-values",
    title: "property-values",
    expression: `"Building Value"+TextFormatting.NewLine+
        "$"+$feature.BLDG_VAL+TextFormatting.NewLine+
        "Land Value"+TextFormatting.NewLine+
        "$"+$feature.LAND_VAL+TextFormatting.NewLine+
        "Total Value"+TextFormatting.NewLine+
        "$"+$feature.TOTAL_VALUE_ASSD`,
  },

  {
    name: "pin",
    title: "PIN",
    expression: `var num = $feature.PIN_NUM;
        var ext = $feature.PIN_EXT;
        return When(ext == '000',num,num+' '+ext);`,
  },
  {
    name: "build_val",
    title: "Building Value",
    expression: `var value = $feature.BLDG_VAL;
        When(IsEmpty(value),'--', '$'+Text(value, '#,###'));`,
  },
  {
    name: "land_val",
    title: "Land Value",
    expression: `var value = $feature.LAND_VAL;
        When(IsEmpty(value),'--', '$'+Text(value, '#,###'));`,
  },
  {
    name: "total_val",
    title: "Total Value",
    expression: `var value = $feature.TOTAL_VALUE_ASSD;
        When(IsEmpty(value),'--', '$'+Text(value, '#,###'));`,
  },
  {
    name: "sale_price",
    title: "Sale Price",
    expression: `var value = $feature.TOTSALPRICE;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));`,
  },
  {
    name: "city",
    title: "City",
    expression: `var city = $feature.CITY_DECODE;When(IsEmpty(city),'', Proper(city));`,
  },
  {
    name: "township",
    title: "Township",
    expression: `var ts = $feature.TOWNSHIP_DECODE;When(IsEmpty(ts),'', Proper(ts));`,
  },
  {
    name: "jurisdiction",
    title: "Jurisdiction",
    expression: `var juris = $feature.PLANNING_JURISDICTION;When(" +
        juris == 'RA', 'Raleigh',
        juris == 'CA', 'Cary',
        juris == 'AP', 'Apex',
        juris == 'AN', 'Angier',
        juris == 'CL', 'Clayton',
        juris == 'DU', 'Durham',
        juris == 'FV', 'Fuquay-Varina',
        juris == 'GA', 'Garner',
        juris == 'HS', 'Holly Springs',
        juris == 'KN', 'Knightdale',
        juris == 'MO', 'Morrisville',
        juris == 'RO', 'Rolesville',
        juris == 'WF', 'Wake Forest',
        juris == 'WE', 'Wendell',
        juris == 'ZB', 'Zebulon',
        juris == 'WC', 'Wake County',
        " '');`,
  },
  {
    name: "general",
    title: "general",
    expression: `"PIN"+
        TextFormatting.NewLine+
        $feature.PIN_NUM+" "+
        $feature.PIN_EXT+
        TextFormatting.NewLine+
        "REID"+
        TextFormatting.NewLine+
        $feature.REID+
        TextFormatting.NewLine+
        "City"+
        TextFormatting.NewLine+
        Proper($feature.CITY_DECODE)+
        TextFormatting.NewLine+
        "Jurisdiction"+
        TextFormatting.NewLine+' +
        $feature.PLANNING_JURISDICTION+
        TextFormatting.NewLine+"Township"+
        TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)+
        "Map Name"+TextFormatting.NewLine+
        $feature.MAP_NAME+
        TextFormatting.NewLine+
        "Land Class"+TextFormatting.NewLine+
        Proper($feature.LAND_CLASS_DECODE)`,
  },
] as ExpressionInfo[];
