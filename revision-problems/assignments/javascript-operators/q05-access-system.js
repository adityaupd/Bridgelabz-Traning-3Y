const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;
const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(secure ? "Secure" : "Unsafe");
