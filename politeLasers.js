function getLaserSetting(req){
    if (req === 'please'){
        return 'OFF'
    } else {
        return 'ON'
    }
}