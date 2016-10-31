var NavigationBar = React.createClass({
	getInitialState: function() {
		return {selected: 0};
	},

	handleClicked: function(index) {
		this.setState({selected: index});
	},

	render: function() {
		var self = this;
		return (
			<div>
				<table>
					<tbody>
						<tr>
						{
							this.props.items.map(function(item, index) {
								var style = self.state.selected == index ? 'selected' : '';
								return (
									<td className={style} onClick={self.handleClicked.bind(self, index)}>{item}</td>);
							})
						}
					</tr>						
					</tbody>
				</table>
				<p>selected: {this.props.items[this.state.selected]}</p>
			</div>
		);
	}
});

var ITEMS = ['HOME', 'SERVICES', 'CONTACT US', 'ABOUT'];

ReactDOM.render(
	<NavigationBar items={ITEMS} />,
	document.getElementById('content')
);