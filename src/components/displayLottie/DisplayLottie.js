import React, {Component, Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  constructor(props) {
    super(props);
    this.state = {isPaused: false};
  }
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        {/* To override default onClick pause by Lottie */}
        <div onClick={() => this.setState({isPaused: !this.state.isPaused})}>
          <Lottie options={defaultOptions} isPaused={this.state.isPaused}/>
        </div>
      </Suspense>
    );
  }
}
