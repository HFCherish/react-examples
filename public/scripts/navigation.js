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
					<tr>
					{
						this.props.items.map(function(item, index) {
							var style = '';
							if( index == self.state.selected )	style = 'selected';
							
							return (
								<td className={style} onClick={self.handleClicked.bind(self, index)}>{item}</td>
							);
						})
					}
					</tr>
				</table>
				<p>selected: {this.props.items[this.state.selected]}</p>
			</div>
		);
	}
});

ReactDOM.render(
	<NavigationBar items={['home', 'services', 'contact us', 'about']} />,
	document.getElementById('content')
);