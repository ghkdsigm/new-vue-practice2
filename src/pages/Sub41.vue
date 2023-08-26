<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app id="list-sample">
    <v-flex sm6 offset-sm3>
      <v-text-field label="Search Data..."
                    v-model="search">
      </v-text-field>
      <v-list two-line
              v-for="(listItem, index) in calData"
              :key="index">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="text--primary">
              {{ listItem.subject }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ listItem.desc }}
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon ripple
                    @click="onEdit(index)">
              edit
            </v-icon>
            <v-icon ripple
                    @click="onRemove(index)">
              delete
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
      <br/>
      <v-pagination
        v-model="curPageNum"
        :length="numOfPages">
      </v-pagination>
    </v-flex>

    <v-layout class="create-data-btn">
      <v-btn fab
             dark
             color="indigo"
             @click="onAdd">
        <v-icon dark>
          add
        </v-icon>
      </v-btn>
    </v-layout>
  
  
      <v-dialog v-model="addDialog"
              persistent
              max-width="500px"
              @keydown.esc="closeDialog">
      <BaseModal>
        <div slot="title"
             class="headline">Add Data
        </div>
        <v-container slot="content"
                     grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Subject"
                            v-model="newData.subject"
                            required>
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                            label="Desc"
                            v-model="newData.desc"
                            @keydown.enter="submit"
                            required>
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn slot="negative-button"
               color="blue darken-1"
               flat
               @click="closeDialog">
          Close
        </v-btn>
        <v-btn slot="positive-button"
               color="blue darken-1"
               flat
               @click="submit">
          Save
        </v-btn>
      </BaseModal>
    </v-dialog>

    <v-dialog v-model="editDialog"
              persistent
              max-width="500px"
              @keydown.esc="closeDialog">
      <BaseModal>
        <div slot="title"
             class="headline">Edit Data
        </div>
        <v-container slot="content"
                     grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                label="Subject"
                v-model="selectedData.subject"
                required>
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Desc"
                v-model="selectedData.desc"
                required
                @keydown.enter="editData">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn slot="negative-button"
               color="blue darken-1"
               flat
               @click="closeDialog">
          Close
        </v-btn>
        <v-btn slot="positive-button"
               color="blue darken-1"
               flat
               @click="editData">
          Save
        </v-btn>
      </BaseModal>
    </v-dialog>

    <v-dialog v-model="removeDialog"
              max-width="500px"
              @keydown.esc="removeDialog=false"
              @keydown.enter="removeData"
              persistent>
      <BaseModal>
        <div slot="title"
             class="headline">Remove Data
        </div>
        <v-btn slot="negative-button"
               color="blue darken-1"
               flat
               @click="closeDialog">
          Cancel
        </v-btn>
        <v-btn slot="positive-button"
               color="blue darken-1"
               flat
               @click="removeData">
          Confirm
        </v-btn>
      </BaseModal>
    </v-dialog>
  </v-app>
</template>

<script>
import BaseModal from '@/components/common/BaseModal'
import '@/assets/vuetify.css'


const testData = [{"id": 1,"subject": "Malawi","desc": "Wels"},{"id": 2,"subject": "Cuba","desc": "Sale"},{"id": 3,"subject": "Somalia","desc": "Lahore"},{"id": 4,"subject": "Togo","desc": "Termeno sulla strada del vino/Tramin an der Weinstrasse"},{"id": 5,"subject": "Slovenia","desc": "Edam"},{"id": 6,"subject": "Tonga","desc": "Vinci"},{"id": 7,"subject": "Kenya","desc": "Te Awamutu"},{"id": 8,"subject": "Japan","desc": "Ferrazzano"},{"id": 9,"subject": "Finland","desc": "Nil-Saint-Vincent-Saint-Martin"},{"id": 10,"subject": "Dominica","desc": "Paglieta"},{"id": 11,"subject": "Solomon Islands","desc": "Vilvoorde"},{"id": 12,"subject": "Monaco","desc": "Tonk"},{"id": 13,"subject": "Cook Islands","desc": "Sint-Pieters-Kapelle"},{"id": 14,"subject": "Gibraltar","desc": "Develi"},{"id": 15,"subject": "Mauritania","desc": "Etobicoke"},{"id": 16,"subject": "Sierra Leone","desc": "Norman Wells"},{"id": 17,"subject": "Ghana","desc": "Charleroi"},{"id": 18,"subject": "Saint Martin","desc": "Düsseldorf"},{"id": 19,"subject": "Uganda","desc": "Dhuy"},{"id": 20,"subject": "Serbia","desc": "Rampur"},{"id": 21,"subject": "Bangladesh","desc": "Kempten"},{"id": 22,"subject": "Bosnia and Herzegovina","desc": "Okigwe"},{"id": 23,"subject": "Somalia","desc": "Valpelline"},{"id": 24,"subject": "Libya","desc": "Beverlo"},{"id": 25,"subject": "Israel","desc": "Coalhurst"},{"id": 26,"subject": "Greece","desc": "Castel Ritaldi"},{"id": 27,"subject": "United Kingdom (Great Britain)","desc": "Benestare"},{"id": 28,"subject": "Singapore","desc": "Tsiigehtchic"},{"id": 29,"subject": "Saint Pierre and Miquelon","desc": "Jhang"},{"id": 30,"subject": "South Georgia and The South Sandwich Islands","desc": "Mobile"},{"id": 31,"subject": "Yemen","desc": "Koningshooikt"},{"id": 32,"subject": "Albania","desc": "Stirling"},{"id": 33,"subject": "Laos","desc": "Beypazarı"},{"id": 34,"subject": "Bouvet Island","desc": "Florida"},{"id": 35,"subject": "Macao","desc": "Calmar"},{"id": 36,"subject": "Austria","desc": "Invergordon"},{"id": 37,"subject": "Palau","desc": "Balclutha"},{"id": 38,"subject": "Denmark","desc": "Bozeman"},{"id": 39,"subject": "Sierra Leone","desc": "Assiniboia"},{"id": 40,"subject": "Austria","desc": "Champigny-sur-Marne"},{"id": 41,"subject": "Finland","desc": "Calera de Tango"},{"id": 42,"subject": "Lesotho","desc": "Ancarano"},{"id": 43,"subject": "Western Sahara","desc": "Cochamó"},{"id": 44,"subject": "Guernsey","desc": "Villers-lez-Heest"},{"id": 45,"subject": "Turkey","desc": "Liedekerke"},{"id": 46,"subject": "Dominica","desc": "Nanterre"},{"id": 47,"subject": "Saint Helena, Ascension and Tristan da Cunha","desc": "Crato"},{"id": 48,"subject": "Czech Republic","desc": "Lossiemouth"},{"id": 49,"subject": "Croatia","desc": "Sale"},{"id": 50,"subject": "South Georgia and The South Sandwich Islands","desc": "North Shore"},{"id": 51,"subject": "Malawi","desc": "Newtonmore"},{"id": 52,"subject": "Marshall Islands","desc": "Piracicaba"},{"id": 53,"subject": "Nepal","desc": "Ponoka"},{"id": 54,"subject": "Gibraltar","desc": "Rabbi"},{"id": 55,"subject": "Åland Islands","desc": "Biarritz"},{"id": 56,"subject": "Nepal","desc": "Sant'Elia a Pianisi"},{"id": 57,"subject": "Virgin Islands, British","desc": "Welland"},{"id": 58,"subject": "Nauru","desc": "Sesto al Reghena"},{"id": 59,"subject": "Antarctica","desc": "Eluru"},{"id": 60,"subject": "Seychelles","desc": "San Francisco"},{"id": 61,"subject": "Thailand","desc": "Mango"},{"id": 62,"subject": "Gambia","desc": "Santa Cruz"},{"id": 63,"subject": "Svalbard and Jan Mayen Islands","desc": "Sant'Angelo a Cupolo"},{"id": 64,"subject": "Honduras","desc": "Villata"},{"id": 65,"subject": "Mexico","desc": "Sadiqabad"},{"id": 66,"subject": "Holy See (Vatican City State)","desc": "Villenave-d'Ornon"},{"id": 67,"subject": "Colombia","desc": "Charlottetown"},{"id": 68,"subject": "South Africa","desc": "Latronico"},{"id": 69,"subject": "Korea, South","desc": "Alajuela"},{"id": 70,"subject": "Cambodia","desc": "Montbéliard"},{"id": 71,"subject": "Palau","desc": "Purmerend"},{"id": 72,"subject": "Uzbekistan","desc": "Norrköping"},{"id": 73,"subject": "Rwanda","desc": "Serramonacesca"},{"id": 74,"subject": "Cayman Islands","desc": "Court-Saint-Etienne"},{"id": 75,"subject": "Algeria","desc": "Gonnosfanadiga"},{"id": 76,"subject": "Samoa","desc": "Banff"},{"id": 77,"subject": "Libya","desc": "Amberloup"},{"id": 78,"subject": "Mayotte","desc": "Merchtem"},{"id": 79,"subject": "Bahamas","desc": "Tuscaloosa"},{"id": 80,"subject": "Tunisia","desc": "Fogo"},{"id": 81,"subject": "Liberia","desc": "Launceston"},{"id": 82,"subject": "Guam","desc": "Glendale"},{"id": 83,"subject": "Georgia","desc": "Port Blair"},{"id": 84,"subject": "Isle of Man","desc": "Trochu"},{"id": 85,"subject": "Cook Islands","desc": "Lawton"},{"id": 86,"subject": "Israel","desc": "Istres"},{"id": 87,"subject": "Guam","desc": "Portland"},{"id": 88,"subject": "Brazil","desc": "Barrhead"},{"id": 89,"subject": "Japan","desc": "Walhain"},{"id": 90,"subject": "Bolivia","desc": "Motherwell"},{"id": 91,"subject": "French Polynesia","desc": "Stroud"},{"id": 92,"subject": "Portugal","desc": "Airdrie"},{"id": 93,"subject": "Guinea-Bissau","desc": "Multan"},{"id": 94,"subject": "Bosnia and Herzegovina","desc": "Challand-Saint-Victor"},{"id": 95,"subject": "Reunion","desc": "Moncton"},{"id": 96,"subject": "Bhutan","desc": "Merthyr Tydfil"},{"id": 97,"subject": "Greece","desc": "Rockford"},{"id": 98,"subject": "Swaziland","desc": "San Nicolás"},{"id": 99,"subject": "Antigua and Barbuda","desc": "Rio Grande"},{"id": 100,"subject": "Portugal","desc": "Aalbeke"}]

export default {
  metaInfo: {
      // title 입력하기
      title: 'vue-paging',
      // link tag 입력하기
      link: [{rel: "canonical", href: 'www.site.com'}],
      // meta tag 입력하기
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { vmid: "description", name: "description", content: 'description' }
      //vmid ↑ 메타 태그를 고유하게 만들어준다.
      ]
  },
  data() {
      return {
        addDialog: false,
        editDialog: false,
        removeDialog: false,
        search: '',
        listData: [],
        searchData: [],
        dataPerPage: 10,
        curPageNum: 1, //페이징 넘버링
        curSelectIndex: 0,

        newData: {
          id: Number,
          subject: '',
          desc: ''
        },
        selectedData: {
          id: Number,
          subject: '',
          desc: ''
        }
      }
    },
    components:{
      BaseModal
    },
    created() {
      // this.axios.get('http://localhost:8080/server/listTest.json')
      //   .then((response) => {
      //     this.listData = response.data;
      //     console.log(this.listData);
      //   });
      this.listData = testData
    },
    computed: {
      // 페이징 시작 갯수
      startOffset() {
        return ((this.curPageNum - 1) * this.dataPerPage);
      },
      // 페이징 종료 갯수
      endOffset() {
        return (this.startOffset + this.dataPerPage);
      },
      // 페이징 한번에 보여주는 양
      numOfPages() {
        return Math.ceil(this.searchData.length / this.dataPerPage);
      },
      calData() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.searchData = this.listData.filter((data) => {
          return data.subject.toLowerCase().includes(this.search.toLowerCase())
        }).slice(0);

        return this.searchData.slice(this.startOffset, this.endOffset)
      }
    },
    methods: {
      submit() {
        const submitData = {
          id: this.newData.id,
          subject: this.newData.subject,
          desc: this.newData.desc
        };
        /*
        Ajax 통신 후
         */
        this.addData(submitData);
        this.closeDialog();
        this.clearForm();
      },
      editData() {
        const editData = {
          id: this.selectedData.id,
          subject: this.selectedData.subject,
          desc: this.selectedData.desc
        };
        /*
        Ajax 통신 후
         */
        this.listData.splice(this.curSelectIndex, 1, editData);
        this.closeDialog();
      },
      addData(submitData) {
        this.listData.push(submitData);
        this.curPageNum = this.numOfPages;
      },
      removeData() {
        this.listData.splice(this.curSelectIndex, 1);
        if (this.calData.length === 0) {
          this.prevPage();
        }
        this.closeDialog();
      },
      onAdd() {
        this.addDialog = true;
      },
      onRemove(index) {
        this.curSelectIndex = this.calIndex(index);

        this.removeDialog = true;
      },
      onEdit(index) {
        this.curSelectIndex = this.calIndex(index);
        this.selectedData.id = this.listData[this.curSelectIndex].id;
        this.selectedData.subject = this.listData[this.curSelectIndex].subject;
        this.selectedData.desc = this.listData[this.curSelectIndex].desc;

        this.editDialog = true;
      },
      calIndex(index) {
        switch (this.curPageNum) {
          case 1:
            return index;
            // eslint-disable-next-line no-unreachable
            break;
          default:
            return index + ((this.curPageNum - 1) * this.dataPerPage);
            // eslint-disable-next-line no-unreachable
            break;
        }
      },
      clearForm() {
        for (let key in this.newData) {
          this.newData[key] = '';
        }
      },
      prevPage() {
        this.curPageNum--;
      },
      closeDialog() {
        this.addDialog = false;
        this.editDialog = false;
        this.removeDialog = false;
      }
    }
}
</script>

<style>
.create-data-btn {
  position: fixed;
  bottom: 0;  
  right: 0;
}
</style>