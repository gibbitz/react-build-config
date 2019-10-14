export default (...elements) => elements.reduce(
    (merged, element) => ({ ...merged, ...element }),
    {}
)
