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
                <div class="spur-card-title">Create Employee</div>
              </div>
              <div class="card-body ">
                
  <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent= "">
                  <div class="form-row">
                    <div class="form-group col-md-6" >
                      <label  class="control-label" for="employee_id"> Employee ID</label>
                       <validation-provider rules="required" v-slot="{errors}">
                      <input
                        type="text"
                        name="employee_id"
                        v-model="employee_id"
                       
                        class="form-control"

                        placeholder="Employee ID"
                      />
                        <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                      
                    </div>
                    <div class="form-group col-md-6">
                      <label class="control-label" for="name">Fullname</label>
                      <validation-provider rules="required" v-slot="{errors}">
                      <input
                        type="text"
                        class="form-control"
                       v-model="name"
                        required
                        placeholder="Fullname"
                        

                      />
                         <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                      
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label class="control-panel" for="dept">Department</label>
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
                    <div  class="form-group col-md-6">
                      <label class="control-panel" for="position">Position </label>
                      <validation-provider rules="required" v-slot="{errors}">
                     <input
                        type="text"
                        name="position"
                             v-model="position"
                        class="form-control"
                       
                 
                   
                        placeholder="Position"
                      
                      />
                      <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                    </div>
   
                  </div>

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

// import users from "../store/modules/users"

// import {Vue, Component} from 'vue-property-decorator'

// import { Validate } from "vuelidate-property-decorators";
// import { required } from "vuelidate/lib/validators";
extend('required', {
  ...required,
  message: 'This field is required'
});

    
export default  {
  name: "user",
   components: {
    Loading ,
    ValidationProvider,
    ValidationObserver
  },

  
 data() {
    return {
      employee_id: null,
      name: null,
      dept: null, 
      position: null,
       isLoading: false,
        loadingIconColor:"#00b8d0"
    }
  },
  
  methods:{

  onSubmit() {

  
    console.log(
      `login details =username= ${this.employee_id} and password= ${this.fullname}`
    );
    this.isLoading = true;

    db.collection("employees")
      .add({
        employee_id: this.employee_id,
        name: this.name,
        dept: this.dept,
        position: this.position
      })
      .then(() => {
           toast.success("Employee created Successfully", "Success", 3000);
        this.$router.push("/app/employeelist");
     
        this.isLoading = false;
      })
    
      .catch(err => {
        console.error(err);

        alert("Invalid details, please try again ");
      });
  },

  },
  created() {
      // this.isLoading= true;

  },

}
</script>
<style scoped>

</style>
