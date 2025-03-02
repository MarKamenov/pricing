module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
