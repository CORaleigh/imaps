### Layout
1. Removal of left toolbar, tools now appear in the right toolbar
2. Panel on left removed, tools that were on the left now appear floating in the top right corner of the map. Panels are also collapsable,useful while on mobile and need access to the map.
3. When tool panel is closed, the tool is disabled and the identify tool is re-enabled

### Property
1. 1/2 now showing in half addresses for the site address.  This has always been an issue in every version of iMAPS.  
2. Address table now exportable
3. If more fields are enabled in the property list, those fields will be enabled when you return to iMAPS
4. Much faster loading of property information when a property is selected
5. If multiple properties are selected display as clustered points when zoomed out to make it easier to locate
6. BUG: if user hit enter without type in search box, the first 2000 would be selected.
7. If property is in Durham County, a button will appear to link user to Durham County's property app
8. Durham County properties now display the photo that is available from Durham County's app
9. BUG: Tax Page button was linking to Wake County for Durham County properties, resulting in no information.  Now linking to Durham County's tax page 
10. When multiple properties are selected, next and previous buttons added to the left and right of the title (site address).  Respects the order that they are listed in the property list.

### Layer List
1. By default only the property layer and the layers visible in previous session are loaded.
2. Once you click on the layer list button, the rest of the layers are loaded.
3. This should greatly improve load times.

### Basemaps
1. Blend option added to top of list of image base maps.  When selected, the street base map is added on top of the imagery, with a slider to control opacity.

### Property Select
1. Highlight selected properties as you draw a shape.
2. If buffer distance set, displays buffered area as you draw.
3. Added a clear button

### Sketch
1. More customization of symbols
2. Added more marker symbol options

### Measure
1. Coordinate conversion widget removed and  added to the lower left corner of the map.

### Coordinates
1. Built custom coordinate component due to issues with CoodinateConversion widget

### Header
1. Reset to default button added.  This will reset iMAPS to the default extent, layers, and base  map.
   1. This was added in case there are issues with what is stored in local storage

### Recent Searches
1. New feature to the property search is a listing of your 10 most recent searches.  Clicking on the clock button next to the property search widget will display a popover with a list of your last 10 searches, selecting a value in the list will perform that search.  If you search and it is already in the list, that search will be moved to the top of the list.  Search history is still in the local storage of the browser, so it will persist when iMAPS is reloaded.

### Code
1. React JS code has been refactored to follow best practices.
2. Better separation of view and controller
3. Upgraded to 4.26 JS SDK and Calcite Design System 1.0


