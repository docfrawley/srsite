<template>
<div class="modal-box">


 <svg @click="hideModal"  xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>
 <div class="menu-item">Account</div>
 <div class="menu-item">Logout</div>
 </div>
</template>

<script>
export default {
emits: ['modalClose'],
setup(props, context){
    function hideModal(){
        context.emit('modalClose')
    }
    return { hideModal}
}
}
</script>

<style>
.modal-box{
    position: absolute;
    z-index: 100;
    height:350px;
    width:250px;
    margin-top:10px;
    right:50px;
    background-color: #fff;
    color:#000;
    border-radius: 5px;
    border: 1px solid var(--lines);
    cursor: pointer;
}

.modal-box svg{
    position: absolute;
    right:5px;
    top:5px;
}
</style>