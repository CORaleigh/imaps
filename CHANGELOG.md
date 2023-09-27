## Version 4.1.0
### Layout
1. Removal of left toolbar, tools now appear in the right toolbar 

![image](https://github.com/CORaleigh/imaps/assets/6587288/d04deeaa-7eeb-46d8-9b6d-1c9c8d908740)

2. Panel on left removed, tools that were on the left now appear floating in the top right corner of the map. Panels are also collapsable,useful while on mobile and need access to the map.

![image](https://github.com/CORaleigh/imaps/assets/6587288/00011322-c756-479c-a988-aea49dfd3dd1)
![image](https://github.com/CORaleigh/imaps/assets/6587288/c94c86d4-ee8d-4789-a7d0-b35f6607e9df)

4. When tool panel is closed, the tool is disabled and the identify tool is re-enabled

### Property
1. 1/2 now showing in half addresses for the site address.  This has always been an issue in every version of iMAPS.  

![image](https://github.com/CORaleigh/imaps/assets/6587288/a38f2db2-58a4-453d-b858-1447cf1714a3)

2. Address table now exportable

![image](https://github.com/CORaleigh/imaps/assets/6587288/5e4773c3-210d-4ea3-a55b-6ab459f735e3)

3. If more fields are enabled in the property list, those fields will be enabled when you return to iMAPS

![image](https://github.com/CORaleigh/imaps/assets/6587288/994d4633-ee92-4e49-97e4-9877972c6a73)

4. Much faster loading of property information when a property is selected
5. If multiple properties are selected display as clustered points when zoomed out to make it easier to locate

![image](https://github.com/CORaleigh/imaps/assets/6587288/b7793404-03d1-4840-bf1c-10c472c1c108)

6. BUG: if user hit enter without type in search box, the first 2000 would be selected.
7. If property is in Durham County, a button will appear to link user to Durham County's property app

![image](https://github.com/CORaleigh/imaps/assets/6587288/7e4fbaa3-9999-4269-8161-cd25e01a95b1)

8. Durham County properties now display the photo that is available from Durham County's app

![image](https://github.com/CORaleigh/imaps/assets/6587288/13617897-1d60-4dbf-a5d2-8d73c1aad5af)

9. BUG: Tax Page button was linking to Wake County for Durham County properties, resulting in no information.  Now linking to Durham County's tax page 
10. When multiple properties are selected, next and previous buttons added to the left and right of the title (site address).  Respects the order that they are listed in the property list.

![image](https://github.com/CORaleigh/imaps/assets/6587288/d2a7ab20-5ff2-4140-89b9-482d459b1fb3)

### Layer List
1. By default only the property layer and the layers visible in previous session are loaded.
2. Once you click on the layer list button, the rest of the layers are loaded.

### Basemaps
1. Blend option added to top of list of image base maps.  When selected, the street base map is added on top of the imagery, with a slider to control opacity.

![image](https://github.com/CORaleigh/imaps/assets/6587288/a86ee8ee-3778-4651-a8af-ae52b56d4966)

### Property Select
1. Highlight selected properties as you draw a shape.

![image](https://github.com/CORaleigh/imaps/assets/6587288/87959ce3-3009-4182-accd-f6dcf122f44e)

3. If buffer distance set, displays buffered area as you draw.

![image](https://github.com/CORaleigh/imaps/assets/6587288/9c20b4e2-58bd-4217-8e99-397f39fa0f75)

5. Added a clear button

### Sketch
1. More customization of symbols
2. Added more marker symbol options

![image](https://github.com/CORaleigh/imaps/assets/6587288/e477cdd2-4324-4330-88de-67bff1d0ac88)

### Measure
1. Coordinate conversion widget removed and  added to the lower left corner of the map.

### Coordinates
1. Built custom coordinate component due to issues with CoodinateConversion widget

![image](https://github.com/CORaleigh/imaps/assets/6587288/0a769459-e373-491c-8775-f7695da80c8c)

### Header
1. Reset to default button added.  This will reset iMAPS to the default extent, layers, and base  map.
   1. This was added in case there are issues with what is stored in local storage

![image](https://github.com/CORaleigh/imaps/assets/6587288/a2f2f6bc-8f7a-46cb-832f-495c6c720f4f)

### Recent Searches
1. New feature to the property search is a listing of your 10 most recent searches.  Clicking on the clock button next to the property search widget will display a popover with a list of your last 10 searches, selecting a value in the list will perform that search.  If you search and it is already in the list, that search will be moved to the top of the list.  Search history is still in the local storage of the browser, so it will persist when iMAPS is reloaded.

![image](https://github.com/CORaleigh/imaps/assets/6587288/625ce64a-9d6f-415b-b2a8-2acf7e4c1dff)

## Version 4.1.1 (9/27/2023)
### Bug Fixes
1. Fixed issue with scales incorrectly rounding when a custom scale was selected while printing.
2. Fixed state issue with the print tool that was reverting the custom scale option.
3. Fixed issue with sketch tool where the symbology of the last graphic drawn was being set to all graphics after printing.
4. Fixed issue with the collapse button on the tool panels not collapsing the panel.

### Enhancements
1. In the event there is an issue with the map loading, the dropdown menu wasn't accessible for user to either submit feedback or use the reset to default button.
2. If there is an issue with the web map JSON that is stored in local storage, a fresh web map will be retrieved from ArcGIS Online.
3. Changed the date columns on the CSV export to display in MM/DD/YYYY format.