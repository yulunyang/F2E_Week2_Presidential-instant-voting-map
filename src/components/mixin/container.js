export const mixin = {
  methods: {
    getCandidatePairs (arr) {
      let candidateNoList = [...new Set(arr.map((item) => item.cand_no))]
      console.log(candidateNoList)
        return candidateNoList.map((candidateNo) => {
          const president = arr.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
          const vicePresident = arr.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
          return {
            candidateNo,
            // areaId: getLocationCode(president) || '',
            areaName: president?.area_name || '',
            presidentName: president?.cand_name || '',
            vicePresidentName: vicePresident?.cand_name || '',
            partyName: president?.party_name || '',
            partyCode: president?.party_code || 0,
            ticketNum: president?.ticket_num || 0,
            ticketPercent: president?.ticket_percent || 0,
          }
      })
    },
    getCandidatePairs2 () {
      console.log('s')
    }
  }
}