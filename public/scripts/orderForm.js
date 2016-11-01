var OrderTable = React.createClass({
	getInitialState: function() {
		return {selected: []};
	},

	calTotal: function() {
		var total = 0.00;
		var self = this;
		this.state.selected.map(function(index) {
			total += self.props.items[index].price;
		});
		return '$' + total.toFixed(2);
	},

	handleClick: function(index) {
		var selected = this.state.selected;
		var selectIndex = selected.indexOf(index);
		if( selectIndex < 0 ) {
			selected.push(index);
		}
		else { 
			selected.splice(selectIndex, 1);
		}
		this.setState({selected: selected});
	}, 

	render: function() {
		var self = this;
		return (
			<div>
				<p className='title'>Our services</p>
				<table>
					<tbody>
						{
							this.props.items.map(function(item, index) {
								var style = self.state.selected.includes(index) ? "selected" : "";
								return (
									<tr className={style} onClick={self.handleClick.bind(self, index)}>
										<td>{item.name}</td>
										<td>{self.props.cashSign + item.price.toFixed(2)}</td>
									</tr>
								);
							})	
						}
						<tr className='total'>
							<td>Total</td>
							<td>{this.calTotal()}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}		
});

var ITEMS = [
	{ name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

ReactDOM.render( 
	<OrderTable items={ITEMS} cashSign={'$'} />,
	document.getElementById('content')
);