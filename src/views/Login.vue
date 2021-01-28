<template>

    <div class="form-screen" >
      <!-- <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :color="loadingIconColor"
      ></loading> -->
       
        <a  class="spur-logo"><i class="fab fa-grunt"></i> <span>Spur</span></a>
           <!-- <div class="form-group" style= 'text-align: center;'>
                    <h3>Sign in to Spur</h3>                 -->
    
        <div class="card account-dialog">
          
            <div class="card-header bg-primary text-white"> Sign in to your account </div> 
            <div class="card-body">
               <ValidationObserver v-slot="{ invalid }">
               <!-- <div  class="alert alert-danger"></div> -->
                <form @submit.prevent="">
              
                    <div class="form-group">
                   <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                    
  <input type="text" size="40" placeholder="Email address"  class="form-control" >
   <span  style="color: red;">{{ errors[0] }}</span>
</ValidationProvider>
                    </div>
                    <div class="form-group">
                             <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
                              
                              <!-- <router-link style= 'text-align: right;'  :to="{ name: 'signup' }">Forgot Password?</router-link> -->
      <input type="password" placeholder="Password" size="40" class="form-control"  />
      <span style="color: red;">{{ errors[0] }}</span>
    </ValidationProvider>
                    </div>
                     
                      
                   

                   
                   <div class="form-group" style= 'text-align: center;'>
                     <button  :disabled="invalid"  class="btn btn-outline-success mb-1">Sign in</button>
                          
                      </div>
                        <div class="form-group" style= 'text-align: center;'>
                          <p>New to Spur?</p >
                          
                              <!-- <router-link style= 'text-align: right;'  :to="{ name: 'signup' }">Forgot Password?</router-link> -->
                  <router-link :to="{ name: 'Signup' }">Create an account</router-link>
                    </div>
                     
                    
                    
     
                </form>
               </ValidationObserver>
            </div>
        </div>
        <!-- <div class="card account-dialog">
          <div class="body">
               <div class="form-group" style= 'text-align: center;'>
                              <router-link style= 'text-align: right;'  :to="{ name: 'signup' }">Forgot Password?</router-link>
                   <router-link :to="{ name: 'signup' }">Dont have an account? Signup </router-link>
                    </div>

            </div>

          </div> -->
    </div>


</template>




<script >

import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationObserver } from 'vee-validate';
// import db from "../components/firebaseInit";
// import Loading from "vue-loading-overlay";
// import * as VeeValidate from "vee-validate"
// import toast from "@/store/modules/toast"; 

// import users from "../store/modules/users"

// import {Vue, Component} from 'vue-property-decorator'

// import { Validate } from "vuelidate-property-decorators";
// import { required } from "vuelidate/lib/validators";
extend('required',{
  ...required,
  message: 'This field is required'
});


export default {
  name: "Login",
    components: {
         ValidationProvider,
    ValidationObserver,
   
   
  },

  data(){
    return{

    }

  },
  methods:{


  }




}



 


// export default {
//   name: "login",
//    components: {
//     Loading ,
//     ValidationProvider,
//     ValidationObserver,
   
//   },
  
//   data() {
//     return {
//       email: "",
//       password: "",
//       confirmpassword:"",
//         error: null,
//       loadingIconColor:"#00b8d0",
//        isLoading: false


//     };
//   },





//    methods: {
//     onLogin() {
//       this.isLoading= true;
//       const user = {
//         email: this.email,
//         password: this.password
//       }
//       this.$store.dispatch('signInAction', user)
      
//     }
    

    
  


     
//   }


 
// }

</script>
<style scoped >
    
    
  
    
</style>