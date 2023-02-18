/***************************************

脚本功能：溏心Vlog 会员视频

在线观看地址:https://txk003.com/line?
脚本作者：伟人
作者QQ:55749353
更新时间：2023-02-19
问题反馈：QQ+55749353
作者忠告: 建议使用在线观看地址观看！
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

#溏心Vlog🚗会员+付费视频

^http[s]:\/\/txh.*com\/h5\/user\/info.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/TX2.js
^http[s]?:\/\/tx[a-zA-Z0-9].+(com|cc|cn)\/h5\/system\/info.*$ url script-request-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/TX1.js
^http[s]?:\/\/tx.*com\/h5\/system\/sendSms url reject-200

[mitm]
hostname = tx*.com


**************************************/


body = $response.body.replace(/.+/, "tjfyqN0Z3SmnnIj7Iw26HLSbizpEOItfV/Tey591tK9vB6Qwydm8cuD4Ue9PEsAyfPILGn7uFX4qF/rKA1ibu8xm9zWTQVesTW23NdXVdluNwHgvcaW+m6mpxLX8pN9ZBElf4Yf7/VFno0SDnxlbAWsY9W81Q855hBjgVlKwG+/GIkCdoch3piuPysUb1nqkS/PqiJTbPzXsdu6tk9BcApf5Hm7kBSpMDNXGIvx6nuhtrh4E5JLLZFI/Um3GHBnE6mwg/ZgkNHUh9UF+ksOiwFWCUE5KaMIdqHK/Fk7XEx+c4rF5it7Qzvrhen9MMFPRO1V9KMK8ItaeC9DT+ju6uZ3dAGn6X5v1T00sojpPBBjJv2T3irU7l7I2YsBCk2jNLkZeR0+Md17gg0T4ZlpghtXatF/uEqgk5F0IsZYksvoUaozo3H9DQ55JGE4Zi6uZD65sZPXlJpFbRfXB5iFk4Ztz5Cv73jDLH/BDk0NCYpPIpkK3gCg9ZnMLxOjDvmRWKiC/ocIst4+lzgvwIm4WGDk6ooL/IE3b5sWMpSUjh+0X6lQtyygWy3p5wKopnS+RwSA2M0NSUtnka9MULXB0racaBqB6imM7Ri6QtnAkzVY7znArjsFOBTHB3AiEBbAUBDgHSXNxVJ0cqBnBYXnyy9dywwFimO3+cpKWNUoEfQAWQa1MV5D06jCFB2gQ/iy7iN8rMtLY57SCuqNErBWPIgHzc+lWaW6jboPRauaUsnP0Va3uW8t2Rt+dQcn9MYgOVEozGV0WnvL9eM0btBu5aVKELTvG6qhFqYVhCvkNaaBz0xmTcJPkyrDzMQScdB+EdTS4XZTtqjKAsQN12JxtSIm9PWfKVp2yWdeTqoQ143tLihox2lFzllua9mo/ZC5zwY/zxLFPexdRdqMrOhqqJghYbtTJACcMsE+HKQumuph3rcZu8QbawMwhHxmnri0BVThqR6b5cComsRUzyAfsud2gW84zenOxPqXO+LAcfjKO6q0sfGqavgbGxo3bNzq1myUx5JlkhEjV/l3wdlwsaX2H8McQrHgW6fjUfdLg1k1Yuq9EoXk2HAFzLtUw/payKa5A2g6/k3l0wJi1qPxa4+p6OMcCpLrbRTQ9WGGJksPxI1iJX7KOTcBVF9amPMwPSnUCqMaYSJmzddtNiwvoC2uQV2vuWVDOauGY4YbAIDhUbxGMu144e5xQqDgrFCtpqBsNLubBCPz9mWSU/RrLVDI87XpCJTHrI7TQ7CX47E8OGM/AGwcHtvHBvaldCJkawFk6s450fmSHc4V0+dif6Lip9oyOECkVJTGXpHyYScn4AAcfPvaqVOZVdr/Fuk3PYQANtibXsbRYd+G69NgIq8Vjq3UX0WvQpMeK4aN2jg7xBNRppVVEt62oEnjtadrCj8r/NlN3qr9kw8E+gY4M6X7+gBrqHfVUIiccKAkjqHR3Hw4QvIrd9JD+uW4YImfP4Rx7PgquVhzRKzQ/FKUcZ+wGTUzzcXwjjqYRpps9yKhDqtoLu2SCgIrEw6b9HMOc+u8ANqWnlmRcXdyic8xWjo3iJE1TRo++Zn42POU/1AEkAMz9TemVrOSWf4bmXSNym8vL3IIqHAJDPjcZEUT+Z/NcsVFKrLCSoBfUJkXQs4dowCgUnR2YA+Pr6C3yJIPdll39148qOvi1SEZSJ6KDOw==")
$done({body});
