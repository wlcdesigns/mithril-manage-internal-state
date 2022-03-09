import m from 'mithril';

const trafficLight = () => {
	
	let state = 'go';
	
	const lights = [{
		className: '.red',
		action: 'stop',
	},{
		className: '.yellow',
		action: 'caution',
	},{
		className: '.green',
		action: 'go',
	}];
	
	const switches = [{
		action: 'stop',
		label: 'Stop',
	},{
		action: 'caution',
		label: 'Caution',
	},{
		action: 'go',
		label: 'Go',
	}]
	
	return {
		
		view: () => [
			
			lights.map( ({action, className}) => m(className,{
				class: [
					action === state ? 'active' : '',
				].join(' ').trim()
			})),
			
			switches.map( ({action, label}) => m('button',{
				onclick: () => {
					state = action;
				}
			}, label))
		]
	}
}

document.getElementById("app") && m.mount( document.getElementById('app'), {
	view: vnode => m(trafficLight)
});