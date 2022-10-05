<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuth } from '../hooks/useAuth';
  import { useUi } from '../../ui/hooks/useUi';
  import SpinnerComponent from '../../shared/components/SpinnerComponent.vue';
  const router = useRouter();
  const { loginUser } = useAuth();
  const { loading, setLoading, routeTo } = useUi();
  const userForm = ref({
    email:    '',
    password: ''
  });
  const error = ref({
    active:           false,
    shakeEmail:       false,
    shakePassword:    false,
    message:          ''
  });
  const shakeEmail = () => {
    error.value.shakeEmail    = true;
    setTimeout(() => {
      error.value.shakeEmail  = false;
    }, 400);
  }
  const shakePassword = () => {
    error.value.shakePassword   = true;
    setTimeout(() => {
      error.value.shakePassword = false;
    }, 400);
  }
  const setError = ( message: string ) => {
    error.value.active  = true;
    shakeEmail();
    shakePassword();
    error.value.message = message;
  }
  const onSubmit = async() => {
    if (userForm.value.email  === '' || userForm.value.password === '') {
      userForm.value.email    === '' && shakeEmail();
      userForm.value.password === '' && shakePassword();
      return;
    }
    setLoading( true );
    const { ok, message } = await loginUser( userForm.value );
    setLoading( false );
    if ( !ok ) {
      setError( message )
      return;
    }
    if ( routeTo.value ) router.push( routeTo.value );
    else router.push({ name: 'selectEvent' });
  }
  </script>
  
  <template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div class="row d-flex justify-content-center align-items-center w-100">
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <img src="../../../assets/logo.png" alt="logo" class="w-md-50">
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center align-items-center text-start mt-5">
        <div class="w-md-75">
          <form @submit.prevent="onSubmit" autocomplete="off">
            <div class="mb-4">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                @focus="error={
                  active:         false,
                  shakeEmail:     false,
                  shakePassword:  false,
                  message:        ''
                }"
                v-model="userForm.email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Tu correo electrónico"
                :class="{ error: error.active, shake: error.shakeEmail }"
              >
              <div
                v-if="error.active"
                class="error-message"
              >
                {{ error.message }}
              </div>
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Contraseña</label>
              <input
                @focus="error={
                  active:         false,
                  shakeEmail:     false,
                  shakePassword:  false,
                  message:        ''
                }"
                v-model="userForm.password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Tu contraseña"
                :class="{ error: error.active, shake: error.shakePassword }"
              >
              <div
                v-if="error.active"
                class="error-message"
              >
                {{ error.message }}
              </div>
            </div>
            <div class="d-grid gap-2 mt-5">
              <button
                class="btn btn-primary btn-lg"
                type="submit"
              >
                <SpinnerComponent
                  v-if="loading"
                  color="secondary"
                />
                <span v-else-if="!loading">
                  Ingresar
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <style scoped>
  .error {
    background-color: #fce4e4;
    border: 1px solid #cc0033;
    outline: none;
  }
  .error-message {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
  }
  .shake {
    animation: shake 0.2s ease-in-out 0s 2;
  }
  @keyframes shake {
    0% { margin-left: 0rem; }
    25% { margin-left: 0.5rem; }
    75% { margin-left: -0.5rem; }
    100% { margin-left: 0rem; }
  }
  </style>