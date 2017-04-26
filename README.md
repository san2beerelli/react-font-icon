# React Font Icon

Easy to use React component for <a href="http://fontawesome.io/">Fontawesome</a> & <a href="https://material.io/icons/">Material Design</a> font icons. 

### Installation
```
npm install --save react-font-icon
```

## Usage

### RFIcon

```javascript
import React, { Component } from 'react';
import { RFIcon } from 'react-font-icon';

class Icon extends Component {
    render() {
        return <RFIcon  name="flag" color="#5f5f5f" type="fa"
                        gradient="90deg, #FEB984, #FF5542"
                        textShadow="0 0.5px 1px rgba(1, 0, 0, 0.3)"
                        fontSize="20em"
                        size="5x" />
    }
}
````

It uses the <a href="https://styled-components.com/"> styled components </a>. If you are not self hosting the Fontawesome &   Material Design icons, no need to worry about linking the font urls to HTML. This component will import the icons from the respected urls. 

### Properties
| Props         |      Fontawesome           |     Material Design   |
| ------------- |:--------------------------:| :--------------------:|
| name     | <a href="http://fontawesome.io/icons/">Fontawesome Icons</a>| <a href="https://material.io/icons/">Material Design Icons</a>  |
| color      | Html color codes |Html color codes |
|gradient| -webkit-linear-gradient | -webkit-linear-gradient |
|textShadow| CSS3 <a href="https://www.w3schools.com/cssref/css3_pr_text-shadow.asp">text-shadow</a> | CSS3 <a href="https://www.w3schools.com/cssref/css3_pr_text-shadow.asp">text-shadow</a>|
|fontSize| CSS <a href="https://www.w3schools.com/cssref/css3_pr_text-shadow.asp">font-size</a>| CSS <a href="https://www.w3schools.com/cssref/css3_pr_text-shadow.asp">font-size</a>|
|type| "fa" (default) | "md" | 
|size| "lg","2x","3x","4x","5x" | NA |
|spin| Available | NA |
|rotate| "90","180","270" | NA |

### RFUrl

Set single time RFUrl properties before use the RFIcon. 

```javascript
import React, { Component } from 'react';
import { RFUrl, RFIcon } from 'react-font-icon';

class Icon extends Component {
    render() {
        RFUrl.useCustomCdnStyles = true;
        RFUrl.faVersion = "4.6.0";
        return <RFIcon  name="flag" color="#5f5f5f" type="fa"
                        gradient="90deg, #FEB984, #FF5542"
                        textShadow="0 0.5px 1px rgba(1, 0, 0, 0.3)"
                        fontSize="20em"
                        size="5x" />
    }
}
````

### Properties
| Props         |      Default               |
| ------------- |:--------------------------:|
| useCustomCdnStyles| false|
|faUrl| Fontawesome Url | 
|faVersion | 4.7.0 |
|mdUrl|Material Design Url |

#### useCustomCdnStyles
If you want to use the custom cdn styles for <a href="http://fontawesome.io/get-started/">Fontawesome</a> / <a href="http://google.github.io/material-design-icons/"> Material Design </a>, set the  useCustomCdnStyles:true .

#### faUrl & mdUrl
You can set custom urls for faUrl(Fontawesome) and mdUrl(Material Design)

#### faVersion
Default Fontawesome version is 4.7.0. You can set any other <a href="https://github.com/FortAwesome/Font-Awesome/wiki">old Fontawesome version </a>.


