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
                      <label  class="control-label" for="employee_id"> Department</label>
                       <validation-provider rules="required" v-slot="{errors}">
                      <input
                        type="text"
                        name="employee_id"
                       
                        class="form-control"
                       
                 
                   
                        placeholder="Position"
                      
                      />
                        <span style="color: red;">{{errors[0]}}</span>
                      </validation-provider>
                      
                    </div>
                    <div class="form-group col-md-6">
                      <label class="control-label" for="fullname">Position</label>
                      <validation-provider rules="required" v-slot="{errors}">
                      <input
                        type="text"
                        class="form-control"
                     
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
    </main>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationObserver } from 'vee-validate';
// import db from "../components/firebaseInit";
import Loading from "vue-loading-overlay";
// import * as VeeValidate from "vee-validate"
// import toast from "@/store/modules/toast"; 

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
     
       isLoading: false,

    }
    
  },
  
  methods:{

  onSubmit() {

this.isLoading= true;
  
  }

  },
  created() {
      this.isLoading= true;

  },

}
</script>
<style scoped>

</style>
