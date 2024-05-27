export default function checkCollision(a, b) {
    if (
        a.x + a.width > b.x &&
        a.x < b.x + b.width &&
        a.y + a.height > b.y &&
        a.y < b.y + b.height
    ) {
        return true
    } else {
        return false
    }
}