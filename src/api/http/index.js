import api from "../api";
console.log("api", api);
//预约须知
export const getFilmList = () => {
    return api.GET(`?cityId=440300&pageNum=1&pageSize=10&type=1&k=9424301`,{},{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1621342383630608573235201","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
    });
};