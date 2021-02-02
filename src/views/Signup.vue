<template>
<body>
    <div class="form-screen">
         <!-- <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :color="loadingIconColor"
      ></loading> -->
      <h1 class="h2">Create account</h1>
              <p class="lead">Start doing things for free, in an instant</p>
          
        <!-- <a href="index.html" class="spur-logo"><i class="fab fa-grunt"></i> <span>Spur</span></a> -->
        <div>
          <hr>
              <ValidationObserver >
                 <div v-if="error" class="alert alert-danger">{{error}}</div>

                <form @submit.prevent="">
                               <div class="form-group">

                   <ValidationProvider name="name" rules="required" v-slot="{ errors }">
  <input type="text"  size="40" placeholder="Name"   v-model="user.name"  class="form-control" >
   <span  style="color: red;">{{ errors[0] }}</span>
</ValidationProvider>
                    
                    </div>
              
                    <div class="form-group">

                   <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
  <input type="text"  size="60" placeholder="Email" v-model="user.email"  class="form-control" >
   <span  style="color: red;">{{ errors[0] }}</span>
</ValidationProvider>
                    
                    </div>
              <div class="form-group">
                       <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
      <input type="password" size="40" placeholder="Password"  v-model="user.password"  class="form-control"  />
      <span style="color: red;">{{ errors[0] }}</span>
    </ValidationProvider>
                    </div>
                    <div class="form-group">
                       <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
      <input type="password" size="40" placeholder="Confirm Password"  class="form-control"  />
      <span style="color: red;">{{ errors[0] }}</span>
    </ValidationProvider>
                    </div>
                     
                    <!-- <div class="form-group">
                        <input type="confirmPassword" id="confirmPassword" size="40" required autofocus  class="form-control" v-model="confirmPassword"  placeholder="Confirm Password">
                    </div> -->
                    <div class="form-row">
                    <div class="form-group col-md-6" >
                      
                          <button  @click="userRegistration()"    class="btn btn-outline-success mb-1">Sign up</button>
                          </div>
                           <div class="form-group col-md-6" >
                          <button      class="btn btn-outline-danger mb-1">Reset Form</button>
                          </div>
                          

                    </div>
                     <div class="form-group" style="text-align:center;"> 
              <router-link :to="{ name: 'Login' }">Have an account?? Sign in</router-link>
                      
                      
                       
                    </div>
                   
        </form>
      
       </ValidationObserver> 
         <p class="mt-5 mb-3 text-muted text-center">© 2021</p>
            </div>
    
   
            
      
    </div>

</body>
</template>



<script >
import toast from '@/store/modules/toast';
import firebase from "firebase";
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
  name: "Signup",
    components: {
         ValidationProvider,
    ValidationObserver,
   
   
  },

  data(){
    return{
       user: {
        name: '',
        email: '',
        password: ''
      }

    }

  },
  methods:{

 userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/')
             toast.Success("User Registration Successfull", "Success", 3000); 
          });
      })
      .catch((error) => {
         alert(error.message);
         toast.error("Please check your form correctly!", "Error", 3000); 
      });
    }
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
    .form-control{
      border-radius: 10px;
      background-color: antiquewhite;
    }
    
  
    
</style>