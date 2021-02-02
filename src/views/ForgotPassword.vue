<template>

    <div class="form-screen" >
      <!-- <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :color="loadingIconColor"
      ></loading> -->
       
        <!-- <a  class="spur-logo"><i class="fab fa-grunt"></i> <span>Spur</span></a> -->
           <!-- <div class="form-group" style= 'text-align: center;'>
                    <h3>Sign in to Spur</h3>                 -->
                 <h1 class="h2">Forgot password &#x1f62B;</h1>
              <p class="lead">Enter your email address to reset</p>
    
       <div>
         <hr>
              
                 <!-- v-slot="{ invalid } -->
               <!-- <div  class="alert alert-danger"></div> --> 
                <form @submit.prevent="">
              
                    <div class="form-group">
                
                    
  <input type="text" size="60" placeholder="Email address"  v-model="user.email" class="form-control" >
  
                    </div>
            
                      
                   

                   
                   <div class="form-group" style= 'text-align: center;'>
                     <button  @click=" forgetpassword()" class="btn btn-outline-success mb-1">Send Reset Link</button>
                          
                      </div>
                        <div class="form-group" style= 'text-align: center;'>
                         
                              <!-- <router-link style= 'text-align: right;'  :to="{ name: 'signup' }">Forgot Password?</router-link> -->
                  <router-link :to="{ name: 'Login' }">Back to Login</router-link>
                    </div>
                     
                    
                    
     
                </form>
              
               <p class="mt-5 mb-3 text-muted text-center">© 2021</p>
            </div>
        </div>
       


</template>




<script>
import firebase from "firebase";

export default {
  name: "ForgotPassword",
  data() {
    return {
      user: {
       
        email: "",
       
      },
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>
<style scoped>
 .form-control{
      border-radius: 10px;
      background-color: antiquewhite;
    }
    
</style>