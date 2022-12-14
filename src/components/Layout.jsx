import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

//compons
import layoutConfig from "./layoutconfig";
import Github from "./Widgets/Github";
import Bio from "./Widgets/Bio";
import Spotify from "./Widgets/Spotify";
import Calendar from "./Widgets/Calendar";
import Todos from "./Widgets/Todos";

//styles
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./../App.css";

// const props = {
//   isDraggable: true,
//   className: "layout",
//   rowHeight: 30,
//   onLayoutChange: function () {},
//   cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
//   // breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 },
// };

// const Layout = () => {
//   const [currentBreakpoint, setcurrentBreakpoint] = useState("");
//   const [compactType, setcompactType] = useState("vertical");
//   const [mounted, setmounted] = useState(false);
//   const [layouts, setlayouts] = useState(layoutConfig);

//   const onBreakpointChangeForced = (breakpoint) => {
//     setcurrentBreakpoint(breakpoint);
//   };

//   const onLayoutChangeForced = (layout, layoutss) => {
//     setlayouts(layoutss);
//   };

//   const mountChange = () => {
//     setmounted(true);
//   };

//   useEffect(() => {
//     mountChange();
//   }, []);

//   const ResponsiveReactGridLayout = WidthProvider(Responsive);

//   return (
//     <motion.div>
//       <ResponsiveReactGridLayout
//         {...props}
//         cancel=".btn"
//         animate
//         isResizable={false}
//         isBounded={true}
//         className="showcase-container"
//         isDraggable={true}
//         // className: "layout",
//         rowHeight={30}
//         cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 }}
//         layout={[
//           { i: "0", x: 0, y: 0, w: 2, h: 7 },
//           { i: "1", x: 2, y: 0, w: 1, h: 7 },
//           { i: "2", x: 4, y: 0, w: 1, h: 14 },
//           { i: "3", x: 0, y: 9, w: 1, h: 7 },
//           { i: "4", x: 1, y: 9, w: 1, h: 7 },
//           { i: "5", x: 2, y: 9, w: 1, h: 14 },
//           { i: "6", x: 0, y: 18, w: 2, h: 7 },
//           { i: "7", x: 4, y: 18, w: 1, h: 7 },
//           { i: "8", x: 0, y: 27, w: 2, h: 7 },
//           { i: "9", x: 4, y: 27, w: 2, h: 7 },
//         ]}
//         breakpoints={{ lg: 1000, md: 750, sm: 660, xs: 450, xxs: 400 }}
//         onBreakpointChange={onBreakpointChangeForced}
//         onLayoutChange={onLayoutChangeForced}
//         measureBeforeMount={false}
//         useCSSTransforms={mounted}
//         compactType={compactType}
//         preventCollision={!compactType}
//       >
//         <div key="0">
//           <Github />
//         </div>
//         <div key="1">
//           <Github />
//         </div>
//         <div key="2">
//           <Github />
//         </div>
//         <div key="5">
//           <Github />
//         </div>
//         <div key="6">
//           <Github />
//         </div>
//         <div key="7">
//           <Github />
//         </div>
//         <div key="8">
//           <Github />
//         </div>
//         <div key="9">
//           <Github />
//         </div>
//       </ResponsiveReactGridLayout>
//     </motion.div>
//   );
// };

// // Layout.propTypes = {
// //     onLayoutChange: PropTypes.func.isRequired
// // };

// export default Layout;

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "",
      compactType: "vertical",
      mounted: false,
      layouts: layoutConfig,
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint,
    });
  }

  onLayoutChange = (layout, layouts) => {
    this.setState({ layouts });
  };

  render() {
    const { layouts } = this.state;

    return (
      <motion.div>
        <ResponsiveReactGridLayout
          {...this.props}
          cancel=".btn"
          animate
          isResizable="false"
          isBounded="true"
          className="showcase-container"
          layouts={{
            lg: layouts.lg,
            md: layouts.md,
            sm: layouts.sm,
            xs: layouts.xs,
            xxs: layouts.xxs,
          }}
          breakpoints={{ lg: 1000, md: 750, sm: 660, xs: 450, xxs: 400 }}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          <div key="0">
            <Bio layout={this.state.currentBreakpoint} />
          </div>
          <div key="1">
            <Github />
          </div>
          <div key="2">
            <Calendar />
          </div>
          <div key="3">
            <Spotify />
          </div>
          <div key="4">
            <Github />
          </div>
          <div key="5">
            <Todos />
          </div>
          <div key="6">
            <Github />
          </div>
          <div key="7">
            <Github />
          </div>
          <div key="8">
            <Github />
          </div>
          <div key="9">
            <Github />
          </div>
        </ResponsiveReactGridLayout>
      </motion.div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
};

ShowcaseLayout.defaultProps = {
  isDraggable: true,
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
  breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 },
};
