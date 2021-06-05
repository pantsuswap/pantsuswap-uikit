import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
    <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANJQTFRFAAAAqHAZc0oQn2oYv4Ad5ZkjuXscuXwcs3cbuXwbzokfzokftnobZk0A0owgx4UeakAAp3AZp3AaxoUeu30ch1oV35Ui3JMhhVoTyIUevH0ciVoTw4MdxIMew4MdiVwVe1IRlmQX4pciz4ogx4QeiVwVhlgTyYYez4oflmQWz4of5JgjwoEen2oXnmoX0YsgxIMeoWwYoGsY040gxIMeyIYesncboWwYs3ca1Y4g0YsgzIgfbUkAtnkboWwYt3oac0oQ0Isf0YsfdUkPwIAduXwbi5bLDAAAAEZ0Uk5TAHIHY9D/bWy7iO7vXwLm2QJ2UK+NMf38IbydKnDibCckTv/pmzoxnOk0xf+oXT/by1o+5cjae0FU7drlA2BiYQvu7giXbyrdqWMAAAC1SURBVHichZDXEoIwFEQjunbsXbFgF7so9u7//5KYUCUz7ENu5pxsMhNC/BMQhCCPhxCOIMoRMcQTSHKEmALSGd5dWSDHfTwPFHi8WALKFY6oQk+NI+oNSWq2vLztGnY6crfXHwxH8vhPTPQHFEVfpm4++zEaZe4SC1hZOvkKjqwdYkOJqtKxtfmOHdU0NvcmFw+sQMiRbk5nQ1yMAiFXtrsxfn+YBbPyfFHxtgpW5eP9Mv98AViVDmEUG+qFAAAAAElFTkSuQmCC" width="24">
    </image>
    </Svg>
  );
};

export default Icon;
