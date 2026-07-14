# iMAPS Change Log

  Version 5.1
  released 6/1/2026

## 
  @arcgis-map-components: 5.1.12


## Migrated from ArcGIS JS SDK Widgets to Components
- with widgets being decrecated at version 5.0 of the ArcGIS JavaScript SDK all widgets have been migreated to components.

## Polygon labeling enhanced
- at version 5.0 of the ArcGIS JS SDK, polygon labels now adjust to the map extent, previously labels were placed at the center of the feature and only appeared when the center was in the map extent.

## Built in User Guide
- the user guide has been built into iMAPS in place of PDF
- videos embedded in the help guide
- table of contents to easily navigate
- added help action to the header of all panels and tools which opens the help to that section

## Location search moved to tools
- Previously the location search appeared as the second option in the panels section.  Since there was excessive white space, it has been moved to the tools section and appears in the upper right corner of the map.

## Coordinate component
- layout has been changed slightly
- added copy to clipboard action

## Sketch component
- redeveloped to handle bugs
- added ability to snap to property layer

## Measure component
- added ability to snap to property layer

## Changes to layer persistence
- previous version stored entire web map JSON, this version stores properties for the visible layers which is used to control which layers are visible on load.
- when first using this version, the previously stored layers will be reset.  An alert will appear to let the user know.

## Property labels persistence
- when property labels are enabled, the selected labels are storaged in local storage and will be visible next time iMAPS is visited.

## Dark/Light theme toggle moved
- the dark/light them toogle has been moved from the menu to the bottom of the action bar on the right side.