<template>
  <div>
    <main class="dash-content">
      <loading :active.sync="isLoading" :can-cancel="true" :color="loadingIconColor"></loading>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <div class="card spur-card">
              <div class="card-header">
                <div class="spur-card-icon">
                  <i class="fas fa-user"></i>
                </div>
                <div class="spur-card-title">Create Department/Position</div>
              </div>
              <div class="card-body ">
                
  <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent= "">
                  <div class="form-row">
                    <div class="form-group col-md-6" >
                      <label  class="control-label" for="dept"> Department</label>
                       <validation-provider rules="required" v-slot="{errors}">
                      <input
                        type="text"
                        name="dept"
                        v-model="dept"
                        class="form-control"

                        placeholder="Department"
                      
                      />
                        <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                      
                    </div>
                    <div class="form-group col-md-6">
                      <label class="control-label" for="position">Position</label>
                      <validation-provider rules="required" v-slot="{errors}">
                      <input
                        type="text"
                        class="form-control"
                     v-model="position"
                        required
                        placeholder="Position"
                        

                      />
                         <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                      
                    </div>
                  </div>

                  <!-- <div class="form-row">
                    <div class="form-group col-md-6">
                      <label class="control-panel" for="dept">Department</label>
                       <validation-provider rules="required" v-slot="{errors}">
                      <select id="dept" class="form-control" >
                        <option value="" selected disabled>
                          Please Select...</option
                        >
                        
                      </select>
                       <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                    </div>
                    <div  class="form-group col-md-6">
                      <label class="control-panel" for="position">Position </label>
                      <validation-provider rules="required" v-slot="{errors}">
                      <select
                        id="position"
                        class="form-control"
                        
                      >
                        <option value="" selected disabled>
                          Please Select...</option
                        >
                       
                      </select>
                      <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                    </div>
   
                  </div> -->

                  &nbsp; &nbsp;
                  <div class="row">
                    <div class="col-xl-6" style="text-align: right">
                      <button
                    :disabled="invalid"
                     v-on:click="onSubmit()"
                        type="button"
                        class="btn btn-outline-success mb-1"
                      >
                        Create
                      </button>
                      &nbsp;
                      <button
                      
                        type="button"
                        class="btn btn-outline-danger mb-1"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
  </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="container-fluid">

        <div class="row">
          <div class="col-lg-12">
            <div class="card spur-card">
             
              <div class="card-body ">
                         <div class="input-group">
      <input type="text" id="myInput" class="form-control" size="40" placeholder="Filter">
       </div>
               <br/>
     <table class="table table-bordered "  >

    <thead>
      <tr>
        <!-- <th>Employee ID</th>
        <th>Department</th> -->
        <th>Department</th>
        <th> Position</th>


      </tr>
    </thead>
    <tbody id="myTable">
      <tr v-for="departments in department"
                    v-bind:key="departments.id">
      <td>
          {{ departments.dept }}

      </td>

        <!-- <td>{{ posdepts.position }}</td> -->



        <!-- <td>{{employee.position}}</td>
         -->
        <td> <span class="badge badge-pill badge-warning">{{
                      departments.position
                    }}</span>
        <router-link
                    class="float-right"

                      v-bind:to="{
                        name: 'viewemployee',
                        params:{dept: departments.dept}

                      }"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link>
                   </td>
      </tr>

    </tbody>
    </table>
   
  

<!-- 
                <ul class="list-group">
                  <li
                    v-for="employee in employees"
                    v-bind:key="employee.id"
                    class="list-group-item"
                  >
                    <span class="badge badge-pill badge-primary">{{
                      employee.position
                    }}</span>

                    {{ employee.employee_id }}:{{ employee.fullname }}: {{employee.dept}}


                  </li>
                </ul> -->
               <br/>
                <!-- <button type="submit" @click="moveto()" class="btn btn-primary">Add Employee</button> -->

                <!-- <button type="button" @click="moveto()" class="btn btn-outline-success float-right"><i class="fas fa-plus"></i>Add Employee</button> -->
              </div>

            </div>
          </div>
        </div>
      </div>
 
    </main>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationObserver } from 'vee-validate';

import db from '../components/firebaseInit';
import Loading from "vue-loading-overlay";
// import * as VeeValidate from "vee-validate"
 import toast from "@/store/modules/toast"; 
import $ from 'jquery';

// import users from "../store/modules/users"

// import {Vue, Component} from 'vue-property-decorator'

// import { Validate } from "vuelidate-property-decorators";
// import { required } from "vuelidate/lib/validators";
extend('required', {
  ...required,
  message: 'This field is required'
});

    
export default  {
  name: "addposdept",
   components: {
    Loading ,
    ValidationProvider,
    ValidationObserver
  },
  
 data() {
 return {
     
      dept: null, 
      position: null,
       isLoading: false,
        loadingIconColor:"#00b8d0",
        department: []
    }
  },
  
  methods:{

  onSubmit() {

// console.log(
//       `login details =username= ${this.employee_id} and password= ${this.fullname}`
//     );
    this.isLoading = true;

    db.collection("department")
      .add({
      
        dept: this.dept,
        position: this.position
      })
      .then(() => {
           toast.success("Created Successfully", "Success", 3000);
        this.$router.push("/app/employeelist");
     
        this.isLoading = false;
      })
    
      .catch(err => {
        console.error(err);
        toast.error("Something went wrong!!", "Error", 3000);

       // alert("Invalid details, please try again ");
      });
  
  }

  },
  created() {
    this.isLoading= true;
    db.collection("department")
     .orderBy('position')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
           
            dept: doc.data().dept,
            position: doc.data().position
          };
          this.department.push(data);
          this.isLoading = false
        });
      });
   

  },
  mounted() {
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    

    }

}
</script>
<style scoped>

</style>
