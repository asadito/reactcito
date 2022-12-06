;(() => {
	let rootElement, rootDomElement

	class Component {
		constructor(props) {
			this.props = props
		}
		setState(state) {
			let newState = state()
			this.state = { ...this.state, ...newState }
			reRender()
		}
	}

	const isAnEvent = (property) => {
		return /^on.*$/.test(property)
	}

	const appendProp = (element, name, value) => {
		if (isAnEvent(name)) {
			element.addEventListener(name.substring(2).toLowerCase(), value)
		} else {
			element.setAttribute(name, value)
		}
	}

	const createReactcitoElement = (tagName, props, children) => {
		const domElement = document.createElement(tagName)
		if (props.textContent) domElement.innerText = props.textContent
		children && children.forEach((child) => domElement.appendChild(child))
		Object.entries(props).forEach((prop) => appendProp(domElement, prop[0], prop[1]))
		return domElement	
	}

	const renderElement = (element, domElement) => {
		rootElement = element
		rootDomElement = domElement
		const currentDom = rootElement.render()
		rootDomElement.appendChild(currentDom)
	}

	const reRender = () => {
		rootDomElement.innerHTML = ''
		renderElement(rootElement, rootDomElement)
	}

	window.Component = Component
	window.createElement = createReactcitoElement
	window.Reactcito = {
		render: renderElement
	}
	
})()