var Counter = React.createClass({
	render: function() {
		var elapsed = Math.round(this.props.elapsed / 100);
		elapsed = elapsed/10 + (elapsed%10? '' : '.0');
		return (
			<div> the time has elapsed for {elapsed} s </div>
		);
	}
});

var start = new Date().getTime();

// setInterval(function() {
// 	ReactDOM.render(
// 		<Counter elapsed={new Date().getTime() - start} />,
// 		document.getElementById('content')
// 		);
// }, 50);

//use factory
var CounterFactory = React.createFactory(Counter);

setInterval(function() {
	ReactDOM.render(
		CounterFactory({elapsed: new Date().getTime() - start}),
		document.getElementById('content')
		);
}, 50);