var Elapsed = React.createClass({
	getInitialState: function() {
		return {elapsed: 0};
	},

	componentDidMount: function() {
		this.timer = setInterval(this.tick, 50);
	},

	tick: function() {
		this.setState({elapsed: new Date() - this.props.start});
	},

	render: function() {
		var elapsed = Math.round(this.state.elapsed / 100);
		elapsed = (elapsed/10).toFixed(1);
		return (
			<p> the examples has started for <em>{elapsed}</em> seconds</p>
		);
	}
});

ReactDOM.render(
	<Elapsed start={Date.now()} />,
	document.getElementById('content')
);