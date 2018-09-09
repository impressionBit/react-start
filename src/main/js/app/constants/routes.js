// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

// Index route
export const state = () => `/${publicPath}/state`;

// Index route
export const rest = () => `/${publicPath}/rest`;

// Index websocket
export const websocket = () => `/${publicPath}/websocket`;
