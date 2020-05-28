<template>
    <div id="app" class="container">
        <h1>Star Wars Characters</h1>
        <br>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Character Search</span>
            </div>
            <input type="text" class="form-control" placeholder="Type your search here..." v-model="search"
                   @input="onSearchChanged">
        </div>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Height</th>
                <th scope="col">Hair</th>
                <th scope="col">Skin</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(person,index) in searchResults" :key="index">
                <td>{{ person.name }}</td>
                <td>{{ person.height }}</td>
                <td>{{ person.hair_color }}</td>
                <td>{{ person.skin_color }}</td>
            </tr>
            </tbody>
        </table>
        <!-- Spinner component -->
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                     color="#62f087"
                     :can-cancel="true"
                     :is-full-page="true"></loading>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Loading from 'vue-loading-overlay';
    import {env} from "../config/environment";
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'App',
        data() {
            return {
                search: '',
                searchResults: [],
                swCharacters: [],
                isLoading: false
            }
        },
        components: {
            Loading
        },
        async mounted() {
            await this.populatePeopleArray();
        },
        methods: {
            redirectToAboutPage() {
                this.$router.push('about');
            },
            onSearchChanged() {
                this.filterResults();
            },
            filterResults() {
                this.searchResults = this.swCharacters.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
            },
            async populatePeopleArray() {
                let shouldFetchPeople = true;
                let apiUrl = env.apiUrl;
                this.isLoading = true;
                while (shouldFetchPeople) {
                    await this.getNextPeoplePage(apiUrl)
                        .then(response => {
                            response?.data?.next ? apiUrl = response.data.next : shouldFetchPeople = false;
                            this.swCharacters = this.swCharacters.concat(response.data.results);
                            this.filterResults();
                        })
                        .catch(error => {
                            alert(error);
                            shouldFetchPeople = false;
                        })
                }
                this.isLoading = false;
            },
            getNextPeoplePage(url) {
                return axios.get(`${env.corsUrlPrefix}/${url}`);
            }
        }
    }
</script>