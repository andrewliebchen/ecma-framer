const palette = {
	light02: '#F6F7F9',
	light05: '#E9EBEE',
	light10: '#DDDFE2',
	light15: '#CED0D4',
	light20: '#BEC2C9',
	light30: '#90949C',
	light50: '#4B4F56',
	light80: '#1D2129',
	chrome: '#4E5664',
	blueDark: '#365899',
	blue: '#4267B2',
	blueAccent: '#5890FF',
	highlightBG: '#EDF2FA',
	green: '#42B72A',
	red: '#FA3E3E',
	yellow: '#FFA933',
	white: '#FFFFFF',
	black: '#000000',
	hoverBG: '#EDF2FA',
};

const fbColor = (value) => {
	if (palette[value]) {
		return new Color(palette[value]);
	} else {
		return new Color(value);
	}
};

export default fbColor;
