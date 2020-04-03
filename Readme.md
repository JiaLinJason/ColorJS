# ColorJS

ColorJS is build for parse CSS3 color to String.

## Usage

Use es6 to import this file
Create a new case`let color = new Color('#fff')`
The class Color accept two different form of color data
includes String type and Array Type
String type can handle the abbreviation version and the normal version
Array type can handle the RGB mode and the RGBA mode

## functions

Function      | Discription
------------- | -------------
toString      | parse this case to complete color string
toRGBString   | parse this case to RBG color string
toRGBAString  | parse this case to RBGA color string
toGray        | parse this case to complete color string with full gray value
toLightGrey   | parse this case to complete color string with light gray value